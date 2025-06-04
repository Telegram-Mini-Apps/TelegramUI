/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ElipsisCircleOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ElipsisCircleOutline28({ size = 28, ...props }: ElipsisCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.665 14a9.335 9.335 0 1 1 18.67 0 9.335 9.335 0 0 1-18.67 0M14 3.335C8.11 3.335 3.335 8.11 3.335 14S8.11 24.665 14 24.665 24.665 19.89 24.665 14 19.89 3.335 14 3.335m.188 12.103a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876m-5.188 0a1.438 1.438 0 1 0 0-2.876 1.438 1.438 0 0 0 0 2.876M20.813 14a1.438 1.438 0 1 1-2.876 0 1.438 1.438 0 0 1 2.875 0" clip-rule="evenodd"/></svg>
  );
}
