/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowLeftAndRight28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ArrowLeftAndRight28({ size = 28, ...props }: ArrowLeftAndRight28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M11.36 4.312a.867.867 0 1 0-1.226-1.226l-4.88 4.88a.867.867 0 0 0 0 1.226l4.88 4.88a.867.867 0 1 0 1.227-1.227L7.962 9.446h13.086a.867.867 0 1 0 0-1.735H7.962zm5.28 19.376a.867.867 0 1 0 1.227 1.227l4.88-4.88a.87.87 0 0 0 0-1.227l-4.88-4.879a.867.867 0 1 0-1.227 1.227l3.398 3.398H6.952a.867.867 0 0 0 0 1.735H20.04z" clip-rule="evenodd"/></svg>
  );
}
