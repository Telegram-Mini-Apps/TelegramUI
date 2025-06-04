/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ChevronRight28Props extends SvgAttributes {
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

export function ChevronRight28({ size = 28, color = 'currentColor', ...props }: ChevronRight28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M19.207 13.293a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414-1.414L17.086 14l-6.793-6.793a1 1 0 1 1 1.414-1.414z" clip-rule="evenodd"/></svg>
  );
}
