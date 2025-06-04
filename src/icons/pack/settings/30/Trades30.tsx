/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Trades30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Trades30({ size = 30, color = 'currentColor', ...props }: Trades30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" d="M12.566 6.066a.8.8 0 0 0-1.132-1.131l-4.5 4.5a.8.8 0 0 0 0 1.13l4.5 4.5a.8.8 0 0 0 1.132-1.13L9.432 10.8H21.5a.8.8 0 0 0 0-1.6H9.432zm4.869 17.869a.8.8 0 0 0 1.13 1.13l4.5-4.5a.8.8 0 0 0 0-1.13l-4.5-4.5a.8.8 0 0 0-1.13 1.13l3.134 3.135H8.5a.8.8 0 0 0 0 1.6h12.07z"/></svg>
  );
}
