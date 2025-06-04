/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Stars30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Stars30({ size = 30, ...props }: Stars30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="url(#paint0_linear_2960_89)" rx="7"/><path fill="#fff" fill-rule="evenodd" d="m11.447 10.555 2.525-4.929a1.18 1.18 0 0 1 2.096.009l2.386 4.753a1.3 1.3 0 0 0 1.012.705l4.995.587a1.22 1.22 0 0 1 1.08 1.353 1.2 1.2 0 0 1-.36.725l-3.948 3.814a.7.7 0 0 0-.21.591l.657 5.15a1.35 1.35 0 0 1-1.186 1.502 1.4 1.4 0 0 1-.823-.153L15.5 22.43a1.06 1.06 0 0 0-.97-.012l-4.322 2.172a1.246 1.246 0 0 1-1.664-.53 1.2 1.2 0 0 1-.122-.727l.345-2.363a3.59 3.59 0 0 1 1.956-2.687l4.8-2.402a.254.254 0 0 0 .113-.345.26.26 0 0 0-.268-.137l-5.87.824a3.3 3.3 0 0 1-2.511-.685l-1.955-1.564a1.27 1.27 0 0 1-.19-1.802c.21-.255.513-.421.845-.463l5.012-.632a.98.98 0 0 0 .748-.52" clip-rule="evenodd"/><defs><linearGradient id="paint0_linear_2960_89" x1="30" x2="0" y1="0" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#DB6202"/><stop offset="1" stop-color="#FCB704"/></linearGradient></defs></svg>
  );
}
