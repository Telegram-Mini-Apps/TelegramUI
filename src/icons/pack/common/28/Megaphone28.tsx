/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Megaphone28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function Megaphone28({ size = 28, ...props }: Megaphone28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M20 6a2 2 0 1 1 4 0v15a2 2 0 1 1-4 0zm-1 14.554V6.5S16.5 9 11 9H7.499A4.5 4.5 0 0 0 3 13.5C3 15.985 5.013 18 7.499 18H11c5.5 0 8 2.554 8 2.554M8.965 23.082 7.295 19.5h4.414l.882 1.891a2 2 0 0 1-3.626 1.69" clip-rule="evenodd"/></svg>
  );
}
