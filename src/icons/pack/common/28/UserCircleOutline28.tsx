/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface UserCircleOutline28Props extends SvgAttributes {
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

export function UserCircleOutline28({ size = 28, color = 'currentColor', ...props }: UserCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 3.8C8.367 3.8 3.8 8.367 3.8 14c0 2.61.98 4.99 2.591 6.794C7.987 19.114 10.798 18 14 18s6.013 1.115 7.608 2.794A10.16 10.16 0 0 0 24.2 14c0-5.633-4.567-10.2-10.2-10.2M2.2 14C2.2 7.483 7.483 2.2 14 2.2S25.8 7.483 25.8 14 20.517 25.8 14 25.8 2.2 20.517 2.2 14M18 11.5c0 2.485-1.79 4.5-4 4.5s-4-2.015-4-4.5S11.79 7 14 7s4 2.015 4 4.5" clip-rule="evenodd"/></svg>
  );
}
