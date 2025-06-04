/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Xmark24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function Xmark24({ size = 24, ...props }: Xmark24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M18.295 7.115a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 1 0 1.41-1.41L13.41 12z"/></svg>
  );
}
