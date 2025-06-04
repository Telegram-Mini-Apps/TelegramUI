/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeAndroid28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function EyeAndroid28({ size = 28, ...props }: EyeAndroid28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M13.8 5c-3.699 0-6.633 1.324-8.649 3.07C3.167 9.79 2 11.992 2 13.8c0 1.807 1.167 4.01 3.151 5.73 2.016 1.746 4.95 3.07 8.649 3.07s6.633-1.324 8.649-3.07c1.984-1.72 3.151-3.923 3.151-5.73s-1.167-4.01-3.151-5.73C20.433 6.324 17.499 5 13.8 5M3.6 13.8c0-1.193.833-2.99 2.599-4.52 1.734-1.504 4.3-2.68 7.601-2.68s5.867 1.176 7.601 2.68C23.167 10.81 24 12.608 24 13.8s-.833 2.99-2.599 4.52C19.667 19.823 17.101 21 13.8 21s-5.867-1.177-7.601-2.68C4.433 16.79 3.6 14.992 3.6 13.8m7.45 0a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m2.75-4.25a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5" clip-rule="evenodd"/></svg>
  );
}
