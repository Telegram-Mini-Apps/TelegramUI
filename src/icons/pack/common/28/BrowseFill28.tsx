/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BrowseFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function BrowseFill28({ size = 28, ...props }: BrowseFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="M14 25a10.6 10.6 0 0 1-4.249-.863 11.3 11.3 0 0 1-3.505-2.383 11.3 11.3 0 0 1-2.383-3.505A10.6 10.6 0 0 1 3 14q0-2.254.863-4.238a11.3 11.3 0 0 1 2.372-3.516A11.3 11.3 0 0 1 9.74 3.863 10.6 10.6 0 0 1 13.99 3q2.253 0 4.248.863t3.516 2.383a11.2 11.2 0 0 1 2.383 3.516Q25 11.746 25 14a10.6 10.6 0 0 1-.863 4.249 11.3 11.3 0 0 1-2.383 3.505 11.2 11.2 0 0 1-3.516 2.383A10.5 10.5 0 0 1 14 25m-4.648-5.381 6.384-3.128q.507-.237.766-.765l3.106-6.374q.183-.378.086-.658a.56.56 0 0 0-.377-.388q-.28-.097-.68.086l-6.352 3.106q-.258.119-.453.313-.183.183-.323.463L8.392 18.66q-.173.366-.075.647.096.28.377.388.292.097.658-.075m4.659-4.239q-.561 0-.97-.399a1.35 1.35 0 0 1-.4-.97q0-.561.4-.96.408-.399.97-.399.561 0 .96.399t.399.96-.4.97a1.3 1.3 0 0 1-.96.4"/></svg>
  );
}
