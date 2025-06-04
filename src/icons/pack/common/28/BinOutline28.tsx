/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BinOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function BinOutline28({ size = 28, ...props }: BinOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M10.2 6.2A2.8 2.8 0 0 1 13 3.4h2a2.8 2.8 0 0 1 2.8 2.8v.2H22A.8.8 0 0 1 22 8H6a.8.8 0 1 1 0-1.6h4.2zm6 0v.2h-4.4v-.2A1.2 1.2 0 0 1 13 5h2a1.2 1.2 0 0 1 1.2 1.2m-8.405 3.915a.8.8 0 1 0-1.59.17L7.515 22.5a2.8 2.8 0 0 0 2.784 2.5h7.418a2.8 2.8 0 0 0 2.784-2.505l1.294-12.21a.8.8 0 1 0-1.59-.17L18.91 22.328a1.2 1.2 0 0 1-1.193 1.073h-7.418a1.2 1.2 0 0 1-1.193-1.072z" clip-rule="evenodd"/></svg>
  );
}
