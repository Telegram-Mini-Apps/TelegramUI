/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TONSpace30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function TONSpace30({ size = 30, ...props }: TONSpace30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M13.911 23.5a1.26 1.26 0 0 0 2.178 0l7.308-12.516c1.116-1.912-.263-4.314-2.476-4.314H9.08c-2.214 0-3.593 2.402-2.477 4.314zm2.189-4.383 5.397-9.242a.668.668 0 0 0-.576-1.005H16.1zm-2.2 0V8.87H9.08a.668.668 0 0 0-.577 1.005z" clip-rule="evenodd"/></svg>
  );
}
