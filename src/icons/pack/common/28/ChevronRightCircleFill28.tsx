/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ChevronRightCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ChevronRightCircleFill28({ size = 28, ...props }: ChevronRightCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11M12.601 8.399a.85.85 0 1 0-1.202 1.202L15.798 14l-4.399 4.399a.85.85 0 1 0 1.202 1.202l5-5a.85.85 0 0 0 0-1.202z" clip-rule="evenodd"/></svg>
  );
}
