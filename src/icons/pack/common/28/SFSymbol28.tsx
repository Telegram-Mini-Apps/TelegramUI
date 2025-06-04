/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface SFSymbol28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function SFSymbol28({ size = 28, ...props }: SFSymbol28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><g clip-path="url(#clip0_202_73)"><path fill="currentColor" d="M6.139 6.156a3.4 3.4 0 0 1 1.709-.937q.996-.215 2.177-.215h.118v1.572h-.176q-.773 0-1.514.137-.732.136-1.172.586-.44.439-.576 1.172-.137.722-.137 1.494v.156H4.996v-.098q0-1.19.215-2.168a3.37 3.37 0 0 1 .928-1.699m5.341.42V5.004h5.04v1.572zm10.381-.42a3.37 3.37 0 0 1 .928 1.7q.215.976.215 2.197v.068h-1.572v-.185q0-.753-.137-1.465-.137-.723-.586-1.172-.44-.44-1.172-.576a7.4 7.4 0 0 0-1.474-.147h-.215V5.004h.097q1.212 0 2.198.215.986.205 1.718.937m-.43 10.313v-5.01h1.573v5.01zm.43 5.302a3.4 3.4 0 0 1-1.718.938 10.4 10.4 0 0 1-2.198.215h-.097v-1.572h.215q.75 0 1.474-.147.732-.137 1.172-.576.44-.45.576-1.162.147-.723.147-1.485v-.175h1.572v.068q0 1.211-.215 2.197a3.37 3.37 0 0 1-.928 1.7m-10.38 1.153v-1.572h5.039v1.572zm-5.342-1.152a3.34 3.34 0 0 1-.938-1.7 11 11 0 0 1-.205-2.197v-.068h1.572v.175q0 .762.137 1.485.137.712.576 1.162.45.44 1.172.576.732.147 1.485.147h.205v1.572h-.098q-1.2 0-2.197-.215a3.4 3.4 0 0 1-1.71-.937M4.995 16.47v-5.01h1.572v5.01z"/></g><defs><clipPath id="clip0_202_73"><path fill="#fff" d="M0 0h28v28H0z"/></clipPath></defs></svg>
  );
}
