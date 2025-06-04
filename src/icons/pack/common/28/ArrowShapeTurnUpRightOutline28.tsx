/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowShapeTurnUpRightOutline28Props extends SvgAttributes {
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

export function ArrowShapeTurnUpRightOutline28({ size = 28, color = 'currentColor', ...props }: ArrowShapeTurnUpRightOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M15.006 5.88c-.184 0-.337.136-.337.356v4.527h-.835c-1.597 0-3.12.16-4.498.744-1.149.489-2.08 1.188-2.809 2.096-1.461 1.837-2.22 4.532-2.22 8.044 0 .17.049.33.108.42.025.039.042.05.044.052h.004l.016.001c.222 0 .351-.074.465-.283 1.886-3.552 5.267-4.59 8.89-4.59h.835v4.566c0 .128.032.182.073.225a.33.33 0 0 0 .204.08.64.64 0 0 0 .331-.066l.014-.007.014-.006c.107-.049.256-.146.446-.326l7.71-7.28a.7.7 0 0 0 .182-.23c.067-.171.065-.25 0-.415a.7.7 0 0 0-.183-.232l-7.71-7.212c-.376-.357-.58-.464-.744-.464m-2.007.356c0-1.101.86-2.026 2.007-2.026.894 0 1.533.58 1.891.92l.002.003 7.7 7.201c.252.235.469.514.598.843a2.1 2.1 0 0 1 0 1.636 2.3 2.3 0 0 1-.596.841l-.003.002-7.7 7.271a3.4 3.4 0 0 1-.888.626c-.71.348-1.728.366-2.435-.321l-.01-.009a1.95 1.95 0 0 1-.566-1.41v-2.875c-2.923.15-5.233 1.143-6.582 3.686l-.003.006c-.398.734-1.081 1.16-1.935 1.16-.683 0-1.176-.37-1.462-.81a2.5 2.5 0 0 1-.38-1.334c0-3.72.8-6.843 2.585-9.084l.002-.003c.91-1.135 2.07-1.998 3.459-2.589h.001c1.404-.595 2.88-.808 4.315-.862z" clip-rule="evenodd"/></svg>
  );
}
