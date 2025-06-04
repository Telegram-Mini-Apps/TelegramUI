/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowDownLeftAndArrowUpRight28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowDownLeftAndArrowUpRight28({ size = 28, ...props }: ArrowDownLeftAndArrowUpRight28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11 17a1 1 0 1 0 0-2H6.414L16.707 4.707a1 1 0 0 0-1.414-1.414L5 13.586V9a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1zm6-6a1 1 0 1 0 0 2h4.586L11.293 23.293a1 1 0 0 0 1.414 1.414L23 14.414V19a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1z" clip-rule="evenodd"/></svg>
  );
}
