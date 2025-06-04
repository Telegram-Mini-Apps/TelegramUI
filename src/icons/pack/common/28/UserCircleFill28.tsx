/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface UserCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function UserCircleFill28({ size = 28, ...props }: UserCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 25.5c6.351 0 11.5-5.149 11.5-11.5S20.351 2.5 14 2.5 2.5 7.649 2.5 14 7.649 25.5 14 25.5m4-14c0 2.485-1.79 4.5-4 4.5s-4-2.015-4-4.5S11.79 7 14 7s4 2.015 4 4.5m2.175 8.207c.377.237.566.356.69.62.09.192.112.54.045.74-.092.279-.266.42-.614.703A9.96 9.96 0 0 1 14 24a9.96 9.96 0 0 1-6.296-2.23c-.348-.283-.522-.424-.614-.702-.067-.2-.046-.549.044-.74.125-.265.314-.384.691-.621C9.525 18.637 11.67 18 14 18s4.474.638 6.175 1.707" clip-rule="evenodd"/></svg>
  );
}
