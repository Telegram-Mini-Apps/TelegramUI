/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ChequeFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ChequeFill28({ size = 28, ...props }: ChequeFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="m6.426 10.058-.019-.042.046-.005c.109-.01.261-.011.51-.011H8v2.723l-1.322-2.221a7 7 0 0 1-.252-.444M9 12.723V10h1.037a7 7 0 0 1 .556.016l-.019.042c-.047.098-.125.23-.252.444z"/><path fill="currentColor" fill-rule="evenodd" d="M3.327 7.638C3 8.28 3 9.12 3 10.8V22h.031l1.8-1.8 1.8 1.8h.063l1.8-1.8 1.8 1.8h.062l1.8-1.8 1.8 1.8h.064l1.8-1.8 1.8 1.8h.063l1.8-1.8 1.8 1.8h.063l1.8-1.8 1.8 1.8H25V10.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C22.72 6 21.88 6 20.2 6H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311M14 9.7a.8.8 0 0 0 0 1.6h7a.8.8 0 0 0 0-1.6zm-.8 3.8a.8.8 0 0 1 .8-.8h4a.8.8 0 0 1 0 1.6h-4a.8.8 0 0 1-.8-.8M6.942 9c-.221 0-.42 0-.58.015-.163.015-.37.05-.55.182a1.02 1.02 0 0 0-.413.726c-.021.223.054.418.125.566.069.145.17.316.284.506l2.262 3.8a.5.5 0 0 0 .86 0l2.262-3.8c.113-.19.215-.361.284-.506.07-.148.146-.343.125-.566a1.02 1.02 0 0 0-.413-.726 1.07 1.07 0 0 0-.55-.182 7 7 0 0 0-.58-.015z" clip-rule="evenodd"/></svg>
  );
}
