/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PlusRectangleOutline28Props extends SvgAttributes {
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

export function PlusRectangleOutline28({ size = 28, color = 'currentColor', ...props }: PlusRectangleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M15.698 5.082a2.8 2.8 0 0 0-3.417.002l-6.69 5.157a2.8 2.8 0 0 0-1.092 2.218v8.24a2.8 2.8 0 0 0 2.8 2.8h13.402a2.8 2.8 0 0 0 2.8-2.8v-8.238a2.8 2.8 0 0 0-1.094-2.22zm-2.44 1.27a1.2 1.2 0 0 1 1.464-.002l6.71 5.16a1.2 1.2 0 0 1 .469.95v8.24a1.2 1.2 0 0 1-1.2 1.2H7.299a1.2 1.2 0 0 1-1.2-1.2v-8.24a1.2 1.2 0 0 1 .468-.951zM14 10.583a.8.8 0 0 1 .8.8v2.842h2.9a.8.8 0 0 1 0 1.6h-2.9v2.953a.8.8 0 0 1-1.6 0v-2.953h-2.9a.8.8 0 0 1 0-1.6h2.9v-2.843a.8.8 0 0 1 .8-.8" clip-rule="evenodd"/></svg>
  );
}
