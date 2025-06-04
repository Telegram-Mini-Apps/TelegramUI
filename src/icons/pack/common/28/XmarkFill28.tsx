/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface XmarkFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function XmarkFill28({ size = 28, ...props }: XmarkFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11M9.435 9.434a.8.8 0 0 1 1.13 0L14 12.87l3.435-3.435a.8.8 0 0 1 1.13 1.132L15.133 14l3.434 3.434a.8.8 0 0 1-1.131 1.132L14 15.13l-3.434 3.435a.8.8 0 0 1-1.131-1.132L12.869 14l-3.434-3.434a.8.8 0 0 1 0-1.132" clip-rule="evenodd"/></svg>
  );
}
