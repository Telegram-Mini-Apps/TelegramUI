/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeSlashAndroid28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function EyeSlashAndroid28({ size = 28, ...props }: EyeSlashAndroid28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M6.066 4.934a.8.8 0 0 0-1.132 1.132l17 17a.8.8 0 0 0 1.132-1.132zM5.35 8.27l.049-.042 1.135 1.136-.136.116C4.633 11.01 3.8 12.807 3.8 14s.833 2.99 2.599 4.52c1.734 1.503 4.3 2.68 7.601 2.68 1.402 0 2.671-.212 3.8-.571l1.254 1.253c-1.471.572-3.163.918-5.054.918-3.699 0-6.633-1.323-8.649-3.07C3.367 18.01 2.2 15.807 2.2 14s1.167-4.01 3.15-5.73M9.75 14c0-.43.064-.847.183-1.238l1.318 1.317a2.75 2.75 0 0 0 2.67 2.67l1.317 1.318A4.25 4.25 0 0 1 9.75 14m3.012-4.067 1.318 1.318a2.75 2.75 0 0 1 2.669 2.67l1.318 1.317a4.25 4.25 0 0 0-5.305-5.305M21.6 18.52l-.136.116 1.135 1.136.049-.042c1.984-1.72 3.15-3.923 3.15-5.73s-1.166-4.01-3.15-5.73C20.633 6.524 17.699 5.2 14 5.2c-1.891 0-3.583.346-5.054.918L10.2 7.37A12.5 12.5 0 0 1 14 6.8c3.301 0 5.867 1.176 7.601 2.68C23.367 11.01 24.2 12.807 24.2 14s-.833 2.99-2.599 4.52" clip-rule="evenodd"/></svg>
  );
}
