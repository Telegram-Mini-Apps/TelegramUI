/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface CreditCardFill28Props extends SvgAttributes {
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

export function CreditCardFill28({ size = 28, color = 'currentColor', ...props }: CreditCardFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} d="M3.002 10c.008-1.165.055-1.831.325-2.362a3 3 0 0 1 1.311-1.311C5.28 6 6.12 6 7.8 6h12.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.27.53.317 1.197.325 2.362z"/><path fill={color} fill-rule="evenodd" d="M3 12v5.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h12.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C25 19.72 25 18.88 25 17.2V12zm3 5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 16 7.034 16 7.5 16h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C9.199 19 8.966 19 8.5 19h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 18.199 6 17.966 6 17.5" clip-rule="evenodd"/></svg>
  );
}
