/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Levels30Props extends SvgAttributes {
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

export function Levels30({ size = 30, color = 'currentColor', ...props }: Levels30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" fill-rule="evenodd" d="M10.5 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M24 14.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-10 6a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" clip-rule="evenodd"/></svg>
  );
}
