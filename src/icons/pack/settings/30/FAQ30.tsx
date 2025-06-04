/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface FAQ30Props extends SvgAttributes {
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

export function FAQ30({ size = 30, color = 'currentColor', ...props }: FAQ30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" fill-rule="evenodd" d="M25 15c0 5.523-4.477 10-10 10S5 20.523 5 15 9.477 5 15 5s10 4.477 10 10m-7.446-4.76c.732.635 1.196 1.575 1.196 2.76 0 .885-.226 1.54-.65 2.035-.38.445-.874.691-1.225.866l-.04.02c-.397.198-.63.326-.797.52-.139.162-.288.444-.288 1.059a.75.75 0 0 1-1.5 0c0-.885.226-1.54.65-2.035.38-.445.874-.691 1.225-.866l.04-.02c.397-.198.63-.325.797-.52.139-.162.288-.444.288-1.059 0-.764-.286-1.285-.678-1.626-.408-.353-.977-.547-1.572-.547s-1.164.194-1.572.547c-.392.34-.678.862-.678 1.626a.75.75 0 0 1-1.5 0c0-1.185.464-2.125 1.197-2.76.717-.62 1.648-.913 2.553-.913s1.836.293 2.553.914M15 21a.835.835 0 1 0 0-1.67.835.835 0 0 0 0 1.67" clip-rule="evenodd"/></svg>
  );
}
