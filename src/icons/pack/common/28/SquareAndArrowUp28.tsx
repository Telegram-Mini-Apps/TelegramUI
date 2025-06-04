/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface SquareAndArrowUp28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function SquareAndArrowUp28({ size = 28, ...props }: SquareAndArrowUp28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14.59 3.395a.835.835 0 0 0-1.18 0L7.75 9.054a.835.835 0 0 0 1.182 1.18l4.233-4.233v10.56a.835.835 0 0 0 1.67 0V6l4.233 4.234a.835.835 0 0 0 1.181-1.181zM6.034 17.19a.835.835 0 0 0-1.67 0v1.669c0 .675 0 1.232.037 1.686.038.47.12.903.328 1.31a3.35 3.35 0 0 0 1.464 1.464c.406.207.839.29 1.31.328.453.037 1.01.037 1.685.037h9.626c.675 0 1.232 0 1.685-.037.471-.039.904-.121 1.31-.328a3.35 3.35 0 0 0 1.464-1.464c.207-.407.29-.84.328-1.31.037-.454.037-1.01.037-1.686V17.19a.835.835 0 0 0-1.67 0v1.635c0 .718 0 1.206-.031 1.584-.03.367-.085.556-.152.688a1.68 1.68 0 0 1-.734.734c-.132.067-.32.121-.688.151-.377.031-.865.032-1.584.032H9.222c-.718 0-1.207 0-1.584-.032-.368-.03-.556-.084-.688-.151a1.68 1.68 0 0 1-.734-.734c-.067-.132-.122-.32-.152-.688-.03-.378-.031-.866-.031-1.584z" clip-rule="evenodd"/></svg>
  );
}
