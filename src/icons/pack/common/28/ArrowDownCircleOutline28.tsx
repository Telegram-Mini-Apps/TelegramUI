/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowDownCircleOutline28Props extends SvgAttributes {
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

export function ArrowDownCircleOutline28({ size = 28, color = 'currentColor', ...props }: ArrowDownCircleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M3.8 14C3.8 8.367 8.367 3.8 14 3.8S24.2 8.367 24.2 14 19.633 24.2 14 24.2 3.8 19.633 3.8 14M14 2.2C7.483 2.2 2.2 7.483 2.2 14S7.483 25.8 14 25.8 25.8 20.517 25.8 14 20.517 2.2 14 2.2m-3.434 12.234a.8.8 0 0 0-1.132 1.132l4 4a.8.8 0 0 0 1.132 0l4-4a.8.8 0 0 0-1.132-1.132L14.8 17.07V9.5a.8.8 0 0 0-1.6 0v7.569z" clip-rule="evenodd"/></svg>
  );
}
