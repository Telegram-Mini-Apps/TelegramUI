/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Plus28Props extends SvgAttributes {
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

export function Plus28({ size = 28, color = 'currentColor', ...props }: Plus28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 24a1 1 0 0 1-1-1v-8H5a1 1 0 1 1 0-2h8V5a1 1 0 1 1 2 0v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 0 1-1 1" clip-rule="evenodd"/></svg>
  );
}
