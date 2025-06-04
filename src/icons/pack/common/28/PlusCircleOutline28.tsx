/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PlusCircleOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function PlusCircleOutline28({ size = 28, ...props }: PlusCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 3.8C8.367 3.8 3.8 8.367 3.8 14S8.367 24.2 14 24.2 24.2 19.633 24.2 14 19.633 3.8 14 3.8M2.2 14C2.2 7.483 7.483 2.2 14 2.2S25.8 7.483 25.8 14 20.517 25.8 14 25.8 2.2 20.517 2.2 14M14 8.7a.8.8 0 0 1 .8.8v3.7h3.7a.8.8 0 0 1 0 1.6h-3.7v3.7a.8.8 0 0 1-1.6 0v-3.7H9.5a.8.8 0 0 1 0-1.6h3.7V9.5a.8.8 0 0 1 .8-.8" clip-rule="evenodd"/></svg>
  );
}
