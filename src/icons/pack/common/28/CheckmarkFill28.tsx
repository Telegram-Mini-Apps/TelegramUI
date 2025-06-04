/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface CheckmarkFill28Props extends SvgAttributes {
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

export function CheckmarkFill28({ size = 28, color = 'currentColor', ...props }: CheckmarkFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m5.183-15.083a.8.8 0 1 0-1.366-.834l-4.932 8.07-2.783-3.18a.8.8 0 0 0-1.204 1.054l3.5 4a.8.8 0 0 0 1.285-.11z" clip-rule="evenodd"/></svg>
  );
}
