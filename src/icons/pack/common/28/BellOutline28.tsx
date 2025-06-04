/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BellOutline28Props extends SvgAttributes {
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

export function BellOutline28({ size = 28, color = 'currentColor', ...props }: BellOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M12.5 4.5a1.5 1.5 0 0 1 3 0v.385c1.955.369 3.338 1.457 4.25 2.824 1.103 1.656 1.5 3.688 1.5 5.291v5.69l1.78 1.78a.75.75 0 0 1-.53 1.28h-17a.75.75 0 0 1-.53-1.28l1.78-1.78V13c0-1.603.397-3.635 1.501-5.291.911-1.367 2.294-2.455 4.249-2.824zm-3 4.041C8.602 9.885 8.25 11.603 8.25 13v5.696c0 .09.001.24-.035.389a1.3 1.3 0 0 1-.15.361c-.08.13-.186.236-.25.3l-.019.019-.485.485h13.378l-.485-.485-.018-.018a1.6 1.6 0 0 1-.252-.301 1.3 1.3 0 0 1-.15-.361c-.035-.15-.034-.299-.034-.39V13c0-1.397-.353-3.115-1.249-4.459-.87-1.306-2.27-2.291-4.501-2.291s-3.63.985-4.5 2.291" clip-rule="evenodd"/><path fill={color} d="M14 25a3 3 0 0 1-2.83-2h5.66A3 3 0 0 1 14 25"/></svg>
  );
}
