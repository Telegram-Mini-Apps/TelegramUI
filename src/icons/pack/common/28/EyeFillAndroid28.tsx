/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeFillAndroid28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function EyeFillAndroid28({ size = 28, ...props }: EyeFillAndroid28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M24.8 13.8c0-3-4-8-11-8s-11 5-11 8 4 8 11 8 11-5 11-8m-14.25 0a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m3.25-4.75a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"/></svg>
  );
}
