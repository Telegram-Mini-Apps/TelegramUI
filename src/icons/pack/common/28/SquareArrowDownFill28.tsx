/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface SquareArrowDownFill28Props extends SvgAttributes {
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

export function SquareArrowDownFill28({ size = 28, color = 'currentColor', ...props }: SquareArrowDownFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M10.086 12.406a.835.835 0 0 0-1.172 1.189l4.5 4.437c.325.32.847.32 1.172 0l4.5-4.437a.835.835 0 0 0-1.172-1.19l-3.079 3.036V6H17.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C24 9.04 24 10.16 24 12.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C20.96 24 19.84 24 17.6 24h-7.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 20.96 4 19.84 4 17.6v-5.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 6 8.16 6 10.4 6h2.765v9.441zM13.165 6V2.063a.835.835 0 1 1 1.67 0V6z" clip-rule="evenodd"/></svg>
  );
}
