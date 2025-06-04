/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface NutFill28Props extends SvgAttributes {
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

export function NutFill28({ size = 28, color = 'currentColor', ...props }: NutFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M9.455 3.358c-.407.255-.735.648-1.39 1.432L5.987 7.276 3.9 9.754l-.001.002c-.658.78-.987 1.17-1.167 1.616-.16.395-.234.818-.22 1.243.018.48.194.96.545 1.92l1.115 3.043 1.102 3.047c.347.96.521 1.441.817 1.82.261.336.59.612.966.812.425.225.929.313 1.935.488l3.193.556 3.19.57c1.006.179 1.509.269 1.985.202a3 3 0 0 0 1.186-.431c.407-.255.735-.648 1.39-1.432l2.078-2.486 2.088-2.478c.659-.782.988-1.173 1.168-1.618.16-.395.235-.818.22-1.243-.018-.48-.193-.96-.545-1.919l-1.115-3.044-1.102-3.047c-.347-.96-.521-1.441-.817-1.82a3 3 0 0 0-.966-.812c-.425-.225-.928-.313-1.935-.488l-3.193-.556-3.19-.57c-1.006-.179-1.509-.269-1.985-.202a3 3 0 0 0-1.186.431M14 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/></svg>
  );
}
