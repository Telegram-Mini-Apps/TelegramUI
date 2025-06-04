/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface InfoCircleFill28Props extends SvgAttributes {
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

export function InfoCircleFill28({ size = 28, color = 'currentColor', ...props }: InfoCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11m1.25-16.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-4.085 3.75c0-.461.374-.835.835-.835h2.25c.461 0 .835.374.835.835v6.165H16.5a.835.835 0 1 1 0 1.67H12a.835.835 0 0 1 0-1.67h1.415v-5.33H12a.835.835 0 0 1-.835-.835" clip-rule="evenodd"/></svg>
  );
}
