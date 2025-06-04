/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowsCircleOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowsCircleOutline28({ size = 28, ...props }: ArrowsCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.196 11c1.175-3.133 4.369-5.4 7.939-5.4a8.21 8.21 0 0 1 8.008 6.377.8.8 0 1 0 1.56-.354A9.81 9.81 0 0 0 14.135 4c-3.31 0-6.366 1.641-8.212 4.171V5.8a.8.8 0 1 0-1.6 0v6a.8.8 0 0 0 .8.8h5.507a.8.8 0 0 0 0-1.6zm15.63 5.996c-1.174 3.134-4.368 5.4-7.938 5.4A8.21 8.21 0 0 1 5.88 16.02a.8.8 0 0 0-1.56.355 9.81 9.81 0 0 0 9.568 7.622c3.31 0 6.367-1.64 8.212-4.17v2.37a.8.8 0 0 0 1.6 0v-6a.8.8 0 0 0-.8-.8h-5.507a.8.8 0 1 0 0 1.6z" clip-rule="evenodd"/></svg>
  );
}
