/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeSlashFillIOS28Props extends SvgAttributes {
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

export function EyeSlashFillIOS28({ size = 28, color = 'currentColor', ...props }: EyeSlashFillIOS28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M7.087 5.913a.83.83 0 0 0-1.174 1.174l15 15a.83.83 0 0 0 1.174-1.174zM2.5 14s1.425-2.493 4.168-4.504l3.066 3.067a4.5 4.5 0 0 0 5.703 5.703l2.169 2.168A11.7 11.7 0 0 1 14 21c-7.5 0-11.5-7-11.5-7m8.25 0q0-.202.024-.398l3.624 3.624A3.25 3.25 0 0 1 10.75 14m2.852-3.226 3.624 3.624a3.25 3.25 0 0 0-3.623-3.624M18.5 14c0 .503-.082.986-.234 1.437l3.066 3.067C24.075 16.494 25.5 14 25.5 14s-4-7-11.5-7a11.7 11.7 0 0 0-3.606.566l2.169 2.168A4.5 4.5 0 0 1 18.5 14" clip-rule="evenodd"/></svg>
  );
}
