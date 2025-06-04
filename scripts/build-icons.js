// Adapted from platformer-hq/platformer-monorepo
// https://github.com/platformer-hq/platformer-monorepo/blob/master/packages/ui/scripts/build-icons.js
// This script optimizes icons, placed in the "icons" folder.

import { optimize } from 'svgo';
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
  statSync,
} from 'node:fs';
import { resolve, dirname, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = resolve(dirname(fileURLToPath(import.meta.url)), '../icons');
const targetDir = resolve(sourceDir, '../src/icons/pack');

// Re-create the target directory.
rmSync(targetDir, { recursive: true });
mkdirSync(targetDir);

// List of collected components.
const collectedComponents = [];

function getComponent(name, size, svg) {
  return `/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ${name}Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default ${size}
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function ${name}({ size = ${size}, color = 'currentColor', ...props }: ${name}Props) {
  return (
    ${svg
      .replace(/([{}])/g, "{'$1'}")
      .replace(/<!--\s*([\s\S]*?)\s*-->/g, '{/* $1 */}')
      .replace(
        /\b(fill|stroke)="currentColor"/g,
        (_, attr) => `${attr}={color}`
      )
      .replace(/(<svg[^>]*)>/i, '$1 width={size} height={size} {...props}>')}
  );
}
`;
}

readdirSync(sourceDir).forEach((category) => {
  const categoryPath = resolve(sourceDir, category);
  if (!statSync(categoryPath).isDirectory()) return;

  mkdirSync(resolve(targetDir, category));

  readdirSync(resolve(sourceDir, category)).forEach((size) => {
    const sizePath = resolve(categoryPath, size);
    if (!statSync(sizePath).isDirectory()) return;

    mkdirSync(resolve(targetDir, category, size));

    readdirSync(resolve(sourceDir, category, size)).forEach((file) => {
      if (!file.endsWith('.svg')) return;

      // Optimize SVG.
      const { data: svg } = optimize(
        readFileSync(resolve(sourceDir, category, size, file)).toString(),
        {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupIds: false,
                },
              },
            },
            'removeDimensions',
            'removeViewBox',
            'removeXlink',
            // Replace static colors which were meant to be dynamic to really dynamic.
            // https://svgo.dev/docs/plugins/convert-colors/
            {
              name: 'convertColors',
              params: {
                currentColor: new RegExp(
                  `(${[
                    'black',
                    '#FF3B30',
                    '#007AFF',
                    '#000',
                    '#000000',
                    '#222',
                    '#FF9500',
                    '#30B0C7',
                    '#34C759',
                    '#FF2D55',
                    '#FC0',
                    '#32ADE6',
                    '#AF52DE',
                    '#8E8E93',
                    '#8E8E93',
                    '#AEAEB2',
                  ].join('|')})`
                ),
              },
            },
          ],
        }
      );

      // Compute component name.
      const component =
        parse(file)
          .name.trim()
          // "Gear@Android" -> "Gear Android"
          // "QR Code-1" -> "QR Code 1"
          .replace(/[@-]/g, ' ')
          // "Left&Right" -> "LeftAndRight"
          .replace(/&/g, 'And')
          // "Gear     Android" -> "Gear Android
          .replace(/ {2,}/g, ' ')
          // "X(Twitter)" -> "Twitter"
          .replace(/X ?\(Twitter\)/g, 'Twitter')
          .split(' ')
          // "face id" -> "FaceId", "Face ID" -> "FaceID"
          .map((part) => part[0].toUpperCase() + part.slice(1))
          .join('') + size;
      collectedComponents.push([category, size, component]);

      // Write Solid component.
      writeFileSync(
        resolve(targetDir, category, size, `${component}.tsx`),
        getComponent(component, size, svg)
      );
    });
  });
});

// Write Solid components index file.
writeFileSync(
  resolve(targetDir, 'index.ts'),
  collectedComponents
    .map(
      ([category, size, component]) =>
        `export type { ${component}Props } from './${category}/${size}/${component}';\nexport { ${component} } from './${category}/${size}/${component}';\n`
    )
    .sort()
    .join('') + '\n'
);
