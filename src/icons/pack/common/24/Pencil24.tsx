/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Pencil24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Pencil24({ size = 24, color = 'currentColor', ...props }: Pencil24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M16.105 4.865c.281-.282.422-.422.562-.516a1.71 1.71 0 0 1 1.905 0c.14.094.281.234.563.516s.422.423.516.563a1.71 1.71 0 0 1 0 1.905c-.093.14-.234.28-.516.563l-.909.909-3.03-3.03-1.213 1.211 3.03 3.03-9.697 9.698-3.03-3.03zm-11.82 14.85v-3.031l3.031 3.03z" clip-rule="evenodd"/></svg>
  );
}
