/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface InfoCircleOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function InfoCircleOutline28({ size = 28, ...props }: InfoCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="M15.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-4.085 3.75c0-.461.374-.835.835-.835h2.25c.461 0 .835.374.835.835v6.165H16.5a.835.835 0 1 1 0 1.67H12a.835.835 0 0 1 0-1.67h1.415v-5.33H12a.835.835 0 0 1-.835-.835"/><path fill="currentColor" fill-rule="evenodd" d="M25 14c0 6.075-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3s11 4.925 11 11m-1.67 0a9.33 9.33 0 1 1-18.66 0 9.33 9.33 0 0 1 18.66 0" clip-rule="evenodd"/></svg>
  );
}
