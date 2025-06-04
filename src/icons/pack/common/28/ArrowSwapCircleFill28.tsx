/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowSwapCircleFill28Props extends SvgAttributes {
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

export function ArrowSwapCircleFill28({ size = 28, color = 'currentColor', ...props }: ArrowSwapCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M14.25 3c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11m-.75 7.403a3.049 3.049 0 0 1 6.098 0v4.98l1.022-1.008a.75.75 0 1 1 1.054 1.068l-2.3 2.268a.75.75 0 0 1-1.053 0l-2.299-2.268a.75.75 0 1 1 1.054-1.068l1.022 1.008v-4.98a1.549 1.549 0 1 0-3.097 0V17.6a3.049 3.049 0 0 1-6.098 0v-4.98L7.88 13.627a.75.75 0 0 1-1.054-1.068l2.3-2.268a.75.75 0 0 1 1.053 0l2.299 2.268a.75.75 0 0 1-1.054 1.068l-1.022-1.009v4.98a1.549 1.549 0 0 0 3.098 0v-7.196" clip-rule="evenodd"/></svg>
  );
}
