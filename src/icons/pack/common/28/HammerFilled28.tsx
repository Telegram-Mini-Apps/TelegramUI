/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface HammerFilled28Props extends SvgAttributes {
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

export function HammerFilled28({ size = 28, color = 'currentColor', ...props }: HammerFilled28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M13.22 1.115a2.35 2.35 0 0 1 1.452 0c.34.11.6.298.807.473.187.159.392.364.603.575L17.96 4.04c.211.21.416.416.575.603.175.206.363.467.473.807.153.472.153.98 0 1.452-.11.34-.298.6-.473.806-.159.188-.364.393-.575.604l-2.723 2.723c.367-.07.76.038 1.045.322l9.045 9.045a1.168 1.168 0 0 1-1.652 1.652L14.63 13.01a1.17 1.17 0 0 1-.322-1.045l-2.081 2.081c-.211.211-.416.416-.604.575a2.4 2.4 0 0 1-.806.473 2.35 2.35 0 0 1-1.452 0c-.34-.11-.6-.298-.807-.473-.187-.159-.392-.364-.603-.575l-1.852-1.851-.026-.027c-.211-.21-.416-.416-.575-.603a2.4 2.4 0 0 1-.473-.807 2.35 2.35 0 0 1 0-1.452c.11-.34.298-.6.473-.806.159-.188.364-.393.575-.604l.026-.026 5.68-5.68.027-.027c.21-.211.416-.416.604-.575.205-.175.466-.363.806-.473M4 23.832c0-.646.523-1.169 1.168-1.169h11.813a1.168 1.168 0 0 1 0 2.337H5.168A1.17 1.17 0 0 1 4 23.832" clip-rule="evenodd"/></svg>
  );
}
