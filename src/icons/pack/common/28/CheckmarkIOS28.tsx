/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface CheckmarkIOS28Props extends SvgAttributes {
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

export function CheckmarkIOS28({ size = 28, color = 'currentColor', ...props }: CheckmarkIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 28" width={size} height={size} {...props}><path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2.33" d="m1.5 15.5 4.332 5.294c.083.102.24.093.311-.018L14 8.5"/></svg>
  );
}
