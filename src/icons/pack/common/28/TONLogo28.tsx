/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TONLogo28Props extends SvgAttributes {
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

export function TONLogo28({ size = 28, color = 'currentColor', ...props }: TONLogo28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} d="M20.865 4.5H7.359C4.875 4.5 3.3 7.179 4.55 9.344l8.335 14.449a1.415 1.415 0 0 0 2.451 0l8.338-14.449c1.247-2.162-.327-4.844-2.808-4.844zm-7.986 14.96-1.815-3.514-4.38-7.834a.765.765 0 0 1 .673-1.144h5.52v12.493zm8.657-11.35-4.378 7.838-1.816 3.512V6.966h5.521c.605 0 .962.643.673 1.144"/></svg>
  );
}
