/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Passport30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Passport30({ size = 30, ...props }: Passport30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M5 11c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 7 7.6 7 9 7h12c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C25 8.9 25 9.6 25 11v8c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C23.1 23 22.4 23 21 23H9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C5 21.1 5 20.4 5 19zm11.335.67c0-.367.298-.665.665-.665h5a.665.665 0 0 1 0 1.33h-5a.665.665 0 0 1-.665-.665M17 14.335a.665.665 0 1 0 0 1.33h5a.665.665 0 1 0 0-1.33zm-.665 3.995c0-.367.298-.665.665-.665h5a.665.665 0 1 1 0 1.33h-5a.665.665 0 0 1-.665-.665M13.105 13c0 1.105-.783 2-1.75 2-.966 0-1.75-.895-1.75-2s.784-2 1.75-2c.967 0 1.75.895 1.75 2m1.183 6H8.422c-.304 0-.457 0-.626-.114a.83.83 0 0 1-.282-.43c-.038-.2.004-.296.087-.487C7.977 17.1 8.933 16 11.356 16s3.378 1.101 3.754 1.969c.083.19.124.286.087.487a.83.83 0 0 1-.283.43c-.169.114-.321.114-.626.114" clip-rule="evenodd"/></svg>
  );
}
