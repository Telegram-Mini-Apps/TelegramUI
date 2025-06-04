/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Currency30Props extends SvgAttributes {
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

export function Currency30({ size = 30, color = 'currentColor', ...props }: Currency30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" d="M14.954 25.438c-.574 0-.95-.364-.95-.961v-1.325c-2.413-.28-4.206-1.547-4.699-3.27a1.8 1.8 0 0 1-.105-.585c0-.656.457-1.102 1.16-1.102.621 0 .95.375 1.16.88.48 1.312 1.676 2.003 3.54 2.003 1.98 0 3.257-.797 3.257-2.308 0-1.278-1.16-1.934-3.011-2.38l-1.606-.374c-2.543-.586-4.277-2.098-4.277-4.254 0-2.602 2.05-4.149 4.582-4.453V5.96c0-.61.375-.961.949-.961s.96.352.96.96v1.337c2.24.27 3.927 1.5 4.43 3.293.06.2.094.41.094.598 0 .62-.457 1.007-1.113 1.007-.633 0-.95-.328-1.195-.843-.528-1.325-1.477-1.98-3.153-1.98-1.898 0-3.046.855-3.046 2.202 0 1.16 1.136 1.864 2.707 2.227l1.546.363c2.953.68 4.618 2.121 4.618 4.383 0 2.86-2.297 4.36-4.887 4.629v1.3c0 .598-.387.962-.961.962"/></svg>
  );
}
