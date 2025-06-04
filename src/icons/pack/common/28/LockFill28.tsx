/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface LockFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function LockFill28({ size = 28, ...props }: LockFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 3.2A4.8 4.8 0 0 0 9.2 8v3.003c-.89.01-1.413.055-1.835.27a2.5 2.5 0 0 0-1.093 1.092C6 12.9 6 13.6 6 15v5c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C7.9 24 8.6 24 10 24h8c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 22.1 22 21.4 22 20v-5c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.422-.215-.946-.26-1.835-.27V8A4.8 4.8 0 0 0 14 3.2m3.2 7.8V8a3.2 3.2 0 0 0-6.4 0v3z" clip-rule="evenodd"/></svg>
  );
}
