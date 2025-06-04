/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Account30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Account30({ size = 30, ...props }: Account30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M15 15c2.21 0 4-2.015 4-4.5S17.21 6 15 6s-4 2.015-4 4.5 1.79 4.5 4 4.5m-6.595 9h13.2c.7 0 1.05 0 1.428-.25.264-.176.576-.639.64-.95.09-.443-.003-.672-.188-1.13-.825-2.036-2.959-4.67-8.48-4.67s-7.655 2.634-8.48 4.67c-.186.458-.278.687-.187 1.13.063.311.375.774.639.95.377.25.727.25 1.428.25" clip-rule="evenodd"/></svg>
  );
}
