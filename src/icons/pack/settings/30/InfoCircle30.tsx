/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface InfoCircle30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function InfoCircle30({ size = 30, ...props }: InfoCircle30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><g clip-path="url(#clip0_1070_3194)"><path fill="currentColor" d="M0 11.2c0-3.92 0-5.88.763-7.378A7 7 0 0 1 3.823.763C5.318 0 7.28 0 11.2 0h7.6c3.92 0 5.88 0 7.378.763a7 7 0 0 1 3.059 3.06C30 5.318 30 7.28 30 11.2v7.6c0 3.92 0 5.88-.763 7.378a7 7 0 0 1-3.06 3.059C24.68 30 22.72 30 18.8 30h-7.6c-3.92 0-5.88 0-7.378-.763a7 7 0 0 1-3.059-3.06C0 24.68 0 22.72 0 18.8z"/><path fill="#fff" d="M15 7c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8m0 7.059a.847.847 0 0 0-.847.847v3.482a.847.847 0 1 0 1.694 0v-3.482a.847.847 0 0 0-.847-.847m0-3.294a.941.941 0 1 0 0 1.882.941.941 0 0 0 0-1.882"/></g><defs><clipPath id="clip0_1070_3194"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
  );
}
