/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface MarketFill28Props extends SvgAttributes {
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

export function MarketFill28({ size = 28, color = 'currentColor', ...props }: MarketFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M25.859 9.67 23.83 4.94c-.3-.702-.45-1.053-.693-1.31a2 2 0 0 0-.771-.509C22.035 3 21.653 3 20.89 3H7.11c-.763 0-1.145 0-1.477.121a2 2 0 0 0-.771.509c-.242.257-.393.608-.693 1.31L2.14 9.67zM4 15.52c.546.2 1.135.31 1.75.31a5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808c.615 0 1.204-.11 1.75-.31v6.28c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C22.48 25 21.92 25 20.8 25H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 23.48 4 22.92 4 21.8zm2 4.08c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 18 7.04 18 7.6 18h3.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C13 18.76 13 19.04 13 19.6v1.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C12.24 23 11.96 23 11.4 23H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 22.24 6 21.96 6 21.4zm-.25-5.1A3.75 3.75 0 0 1 2.008 11h23.984a3.75 3.75 0 0 1-6.492 2.3 3.74 3.74 0 0 1-2.75 1.2A3.74 3.74 0 0 1 14 13.3a3.74 3.74 0 0 1-2.75 1.2 3.74 3.74 0 0 1-2.75-1.2 3.74 3.74 0 0 1-2.75 1.2" clip-rule="evenodd"/></svg>
  );
}
