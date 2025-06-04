/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Passcode30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Passcode30({ size = 30, ...props }: Passcode30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M25.5 11.5a6.5 6.5 0 0 1-9 6.002V20.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C16.12 21 15.98 21 15.7 21h-3.4c-.28 0-.42 0-.527.055a.5.5 0 0 0-.218.218c-.055.107-.055.247-.055.527v1.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055H6.3c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C5.5 24.12 5.5 23.98 5.5 23.7v-.916c0-.474 0-.711.052-.935a2 2 0 0 1 .227-.565c.117-.198.28-.37.609-.712l6.516-6.812A6.5 6.5 0 1 1 25.5 11.5m-5 .5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"/></svg>
  );
}
