/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface MessageOutline28Props extends SvgAttributes {
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

export function MessageOutline28({ size = 28, color = 'currentColor', ...props }: MessageOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path stroke={color} stroke-linecap="round" stroke-width="1.6" d="M21.173 6.757C19.356 5.057 16.813 4 14 4 8.477 4 4 8.07 4 13.091c0 2.864 1.338 5.211 3.614 6.877.29.213.559 1.398-.09 2.392-.265.407-.557.723-.782.967-.325.352-.51.552-.27.652.25.105 1.728.157 2.794-.441.835-.468 1.34-.935 1.681-1.25.282-.26.45-.416.599-.381q.8.184 1.645.246l.023.002q.39.027.786.027c5.523 0 10-4.07 10-9.09 0-2.463-1.077-4.698-2.827-6.335Z"/></svg>
  );
}
