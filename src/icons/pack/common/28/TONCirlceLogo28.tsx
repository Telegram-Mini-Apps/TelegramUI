/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TONCirlceLogo28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function TONCirlceLogo28({ size = 28, color = 'currentColor', ...props }: TONCirlceLogo28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11M10.244 9.05h7.512c1.381 0 2.256 1.492 1.563 2.694L14.68 19.78a.787.787 0 0 1-1.363 0l-4.636-8.036c-.695-1.204.18-2.694 1.562-2.694m3.07 8.319v-6.946h-3.071a.426.426 0 0 0-.375.636l2.437 4.357zm2.38-1.952 2.435-4.359a.426.426 0 0 0-.374-.636h-3.07v6.948z" clip-rule="evenodd"/></svg>
  );
}
