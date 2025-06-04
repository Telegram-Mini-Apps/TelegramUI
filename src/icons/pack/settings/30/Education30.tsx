/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Education30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Education30({ size = 30, color = 'currentColor', ...props }: Education30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" d="M25.221 11.215q.393.172.582.468.197.295.197.606 0 .32-.197.607-.189.287-.582.467l-8.028 3.682q-.63.286-1.164.418a4 4 0 0 1-1.033.123 4 4 0 0 1-1.033-.123 7 7 0 0 1-1.165-.418l-3.5-1.607 4.952-2.32q.36.105.779.106.443 0 .836-.123.402-.123.648-.328.255-.213.254-.484 0-.262-.254-.467a1.75 1.75 0 0 0-.648-.32 2.8 2.8 0 0 0-.836-.123q-.435 0-.837.123a1.8 1.8 0 0 0-.656.32q-.255.205-.254.467 0 .099.066.18l-5.19 2.436-3.379-1.541a1.4 1.4 0 0 1-.59-.468A1.1 1.1 0 0 1 4 12.29q0-.311.189-.606.196-.296.59-.468l8.02-3.673a6.7 6.7 0 0 1 1.164-.419q.533-.13 1.033-.123.508-.008 1.033.123a6.7 6.7 0 0 1 1.164.419zM9.264 16.652l3.067 1.402q1.46.664 2.665.656 1.213.008 2.665-.656l5.289-2.42v2.822q0 .918-.566 1.738-.558.82-1.6 1.443-1.04.631-2.508.984-1.468.36-3.28.36-1.788 0-3.247-.36-1.452-.352-2.485-.984zM7.05 15.635l1.148.533v4.64a4.4 4.4 0 0 1-.852-1.188q-.296-.632-.296-1.164zm1.148 7.904v-2.73q.222.23.492.434.27.205.574.394v1.902zm-.647.058q0-.484.287-.78.294-.286.778-.286h.222q.484 0 .77.287.296.295.296.779v2.156q0 .484-.295.771-.288.295-.771.295h-.222q-.483 0-.778-.295-.287-.287-.287-.77z"/></svg>
  );
}
