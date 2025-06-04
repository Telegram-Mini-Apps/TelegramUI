/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowShapeTurnUpRightFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowShapeTurnUpRightFill28({ size = 28, ...props }: ArrowShapeTurnUpRightFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="M14.156 22.633a1.1 1.1 0 0 1-.322-.82v-3.731c-3.471 0-6.474.983-8.154 4.15-.256.473-.663.723-1.201.723-.693 0-1.006-.713-1.006-1.308 0-3.617.779-6.526 2.402-8.565q1.23-1.533 3.135-2.344c1.528-.647 3.18-.81 4.824-.81V6.236c0-.66.507-1.191 1.172-1.191.53 0 .952.345 1.318.693l7.705 7.207q.285.264.39.537c.141.358.147.654 0 1.026a1.5 1.5 0 0 1-.39.537l-7.705 7.275q-.351.332-.674.479c-.477.239-1.098.218-1.494-.166"/></svg>
  );
}
