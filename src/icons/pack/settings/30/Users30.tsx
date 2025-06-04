/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Users30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Users30({ size = 30, color = 'currentColor', ...props }: Users30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><g clip-path="url(#clip0_1070_3241)"><path fill={color} d="M0 11.2c0-3.92 0-5.88.763-7.378A7 7 0 0 1 3.823.763C5.318 0 7.28 0 11.2 0h7.6c3.92 0 5.88 0 7.378.763a7 7 0 0 1 3.059 3.06C30 5.318 30 7.28 30 11.2v7.6c0 3.92 0 5.88-.763 7.378a7 7 0 0 1-3.06 3.059C24.68 30 22.72 30 18.8 30h-7.6c-3.92 0-5.88 0-7.378-.763a7 7 0 0 1-3.059-3.06C0 24.68 0 22.72 0 18.8z"/><path fill="#fff" d="M18.357 15.5c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143l-4.07.001q.159-.49.159-1.144c0-1.149-.422-2.045-1.118-2.708a7.4 7.4 0 0 1 1.452-.149m-6.014 0c1.533 0 4.343.571 4.343 2.857 0 1-.255 1.143-.766 1.143H8.766c-.51 0-.766-.143-.766-1.143 0-2.286 2.81-2.857 4.343-2.857m0-5c1.108 0 2.005.895 2.005 2s-.897 2-2.005 2a2 2 0 0 1-2.004-2c0-1.105.897-2 2.004-2m6.014 0c1.107 0 2.004.895 2.004 2s-.897 2-2.004 2a2 2 0 0 1-2.005-2c0-1.105.897-2 2.005-2"/></g><defs><clipPath id="clip0_1070_3241"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs></svg>
  );
}
