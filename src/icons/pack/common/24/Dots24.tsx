/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Dots24Props extends SvgAttributes {
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

export function Dots24({ size = 24, color = 'currentColor', ...props }: Dots24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} d="M12.522 8c1.148 0 2.087-.9 2.087-2s-.94-2-2.087-2-2.087.9-2.087 2 .939 2 2.087 2m0 2c-1.148 0-2.087.9-2.087 2s.939 2 2.087 2 2.087-.9 2.087-2-.94-2-2.087-2m0 6c-1.148 0-2.087.9-2.087 2s.939 2 2.087 2 2.087-.9 2.087-2-.94-2-2.087-2"/></svg>
  );
}
