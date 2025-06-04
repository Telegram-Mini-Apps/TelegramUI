/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface DollarSignCircleFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function DollarSignCircleFill28({ size = 28, ...props }: DollarSignCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3m-.746 17.168c0 .45.276.719.703.719s.702-.269.702-.72v-.781c1.793-.197 3.341-1.24 3.341-3.183 0-1.547-1.153-2.535-3.183-3l-1.026-.238c-1.05-.236-1.761-.687-1.761-1.413 0-.845.726-1.382 1.935-1.382 1.058 0 1.674.403 2.03 1.232.197.379.441.6.9.6.505 0 .852-.276.852-.735 0-.15-.031-.292-.07-.442-.348-1.16-1.47-1.998-3.018-2.187v-.806c0-.45-.276-.718-.702-.718-.427 0-.703.268-.703.718v.806c-1.77.22-3.143 1.295-3.143 3.08 0 1.492 1.192 2.519 2.993 2.93l1.074.252c1.208.285 1.935.695 1.935 1.493 0 .94-.814 1.445-2.085 1.445-1.2 0-1.943-.442-2.259-1.248-.166-.37-.427-.64-.885-.64-.544 0-.884.332-.884.83 0 .134.024.284.079.434.34 1.098 1.5 1.959 3.175 2.156z" clip-rule="evenodd"/></svg>
  );
}
