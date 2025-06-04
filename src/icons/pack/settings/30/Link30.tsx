/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Link30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Link30({ size = 30, ...props }: Link30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><g clip-path="url(#clip0_1070_3210)"><path fill="currentColor" d="M0 11.2c0-3.92 0-5.88.763-7.378A7 7 0 0 1 3.823.763C5.318 0 7.28 0 11.2 0h7.6c3.92 0 5.88 0 7.378.763a7 7 0 0 1 3.059 3.06C30 5.318 30 7.28 30 11.2v7.6c0 3.92 0 5.88-.763 7.378a7 7 0 0 1-3.06 3.059C24.68 30 22.72 30 18.8 30h-7.6c-3.92 0-5.88 0-7.378-.763a7 7 0 0 1-3.059-3.06C0 24.68 0 22.72 0 18.8z"/><path fill="#fff" d="M13.672 14.468a1.187 1.187 0 1 1-2.116 1.079 4.75 4.75 0 0 1 .874-5.517l2.52-2.52a4.75 4.75 0 0 1 6.717 6.718 1.187 1.187 0 1 1-1.68-1.68A2.375 2.375 0 0 0 16.63 9.19l-2.52 2.52a2.38 2.38 0 0 0-.437 2.758m1.837.238a1.188 1.188 0 0 1 2.115-1.08 4.75 4.75 0 0 1-.873 5.518l-2.52 2.52a4.75 4.75 0 1 1-6.717-6.718 1.187 1.187 0 1 1 1.68 1.68 2.375 2.375 0 1 0 3.358 3.358l2.52-2.52c.733-.732.9-1.85.437-2.758"/></g><defs><clipPath id="clip0_1070_3210"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
  );
}
