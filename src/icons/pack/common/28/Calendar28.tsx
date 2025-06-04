/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Calendar28Props extends SvgAttributes {
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

export function Calendar28({ size = 28, color = 'currentColor', ...props }: Calendar28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M3.327 5.638C3 6.28 3 7.12 3 8.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 24 6.12 24 7.8 24h12.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C25 21.72 25 20.88 25 19.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C22.72 4 21.88 4 20.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311m1.836 4.181C5 10.139 5 10.559 5 11.4v8.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h13.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581v-8.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C21.861 9 21.441 9 20.6 9H7.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656M11 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-.5 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3.5-4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 9 16v-1a.5.5 0 0 0-.5-.5zm-.5 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm8.5-7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-.5 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5-6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"/></svg>
  );
}
