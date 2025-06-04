/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PaymentCard30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function PaymentCard30({ size = 30, ...props }: PaymentCard30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" d="M5.006 11c.014-.77.068-1.246.266-1.635a2.5 2.5 0 0 1 1.093-1.093C6.9 8 7.6 8 9 8h12c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093c.199.389.253.865.267 1.635z"/><path fill="#fff" fill-rule="evenodd" d="M5 13h20v5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C23.1 22 22.4 22 21 22H9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C5 20.1 5 19.4 5 18zm2.076 4.617C7 17.801 7 18.034 7 18.5s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h1c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 17 9.966 17 9.5 17h-1c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541" clip-rule="evenodd"/></svg>
  );
}
