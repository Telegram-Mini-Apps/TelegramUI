/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowUpAndDownCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowUpAndDownCircleFill28({ size = 28, ...props }: ArrowUpAndDownCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M25 14c0 6.075-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3s11 4.925 11 11m-18.566.934a.8.8 0 0 1 1.132 0L9.2 16.57V9.5a.8.8 0 1 1 1.6 0v7.069l1.634-1.635a.8.8 0 0 1 1.132 1.132l-3 3a.8.8 0 0 1-1.132 0l-3-3a.8.8 0 0 1 0-1.132m14-1.868a.8.8 0 0 0 1.132-1.132l-3-3a.8.8 0 0 0-1.132 0l-3 3a.8.8 0 0 0 1.132 1.132L17.2 11.43v7.07a.8.8 0 0 0 1.6 0v-7.069z" clip-rule="evenodd"/></svg>
  );
}
