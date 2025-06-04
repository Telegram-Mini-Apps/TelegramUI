/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Twitter24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function Twitter24({ size = 24, ...props }: Twitter24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M17.217 3.865h2.76l-6.03 6.892 7.094 9.378h-5.555l-4.35-5.688-4.978 5.688H3.396l6.45-7.372L3.04 3.866h5.695l3.932 5.199zm-.97 14.618h1.53L7.905 5.43H6.264z"/></svg>
  );
}
