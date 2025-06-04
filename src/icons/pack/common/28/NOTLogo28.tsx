/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface NOTLogo28Props extends SvgAttributes {
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

export function NOTLogo28({ size = 28, color = 'currentColor', ...props }: NOTLogo28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m3.756-5.826h-7.512c-1.381 0-2.257-1.492-1.563-2.695l4.638-8.035a.787.787 0 0 1 1.363 0l4.636 8.035c.695 1.205-.18 2.695-1.562 2.695m-3.07-8.319v6.946h3.071a.426.426 0 0 0 .374-.636l-2.436-4.358zm-2.38 1.951-2.435 4.36a.426.426 0 0 0 .374.636h3.07v-6.949z" clip-rule="evenodd"/></svg>
  );
}
