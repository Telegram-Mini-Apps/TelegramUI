/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeFillIOS28Props extends SvgAttributes {
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

export function EyeFillIOS28({ size = 28, color = 'currentColor', ...props }: EyeFillIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M2.5 14s4-8 11.5-8 11.5 8 11.5 8-4 8-11.5 8-11.5-8-11.5-8M19 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clip-rule="evenodd"/></svg>
  );
}
