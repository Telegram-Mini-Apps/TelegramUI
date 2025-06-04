/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TON24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function TON24({ size = 24, color = 'currentColor', ...props }: TON24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19m-3.24 5h6.487c1.193 0 1.949 1.288 1.35 2.327l-4.005 6.94a.68.68 0 0 1-1.178 0L7.41 9.827c-.6-1.04.156-2.327 1.35-2.327m2.65 7.184V8.686H8.758a.368.368 0 0 0-.323.549l2.104 3.763zM13.466 13l2.104-3.765a.368.368 0 0 0-.324-.55h-2.652v6.002z" clip-rule="evenodd"/></svg>
  );
}
