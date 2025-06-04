/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ClockBadgeCheckmark28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function ClockBadgeCheckmark28({ size = 28, color = 'currentColor', ...props }: ClockBadgeCheckmark28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M3.8 14C3.8 8.367 8.367 3.8 14 3.8S24.2 8.367 24.2 14q0 .176-.006.35a7 7 0 0 1 1.556.738q.05-.537.05-1.088c0-6.517-5.283-11.8-11.8-11.8S2.2 7.483 2.2 14 7.483 25.8 14 25.8c.908 0 1.792-.102 2.64-.297a7 7 0 0 1-.938-1.444q-.832.14-1.702.141C8.367 24.2 3.8 19.633 3.8 14M14 5.2a.8.8 0 0 1 .8.8v8a.8.8 0 0 1-.8.8H8a.8.8 0 0 1 0-1.6h5.2V6a.8.8 0 0 1 .8-.8M28 21a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-2.72-2.455a.7.7 0 0 1 .139.98l-3.398 4.53a.7.7 0 0 1-1.073.056l-1.935-2.089a.7.7 0 0 1 1.027-.951l1.365 1.473 2.894-3.86a.7.7 0 0 1 .98-.14" clip-rule="evenodd"/></svg>
  );
}
