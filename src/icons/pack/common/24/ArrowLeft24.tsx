/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowLeft24Props extends SvgAttributes {
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

export function ArrowLeft24({ size = 24, color = 'currentColor', ...props }: ArrowLeft24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} d="M20 12a1 1 0 0 0-1-1H7.83l4.88-4.88a1 1 0 0 0-1.415-1.415l-6.164 6.164c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l6.164 6.164a.997.997 0 0 0 1.41-1.41L7.83 13H19a1 1 0 0 0 1-1"/></svg>
  );
}
