/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ListStar28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ListStar28({ size = 28, ...props }: ListStar28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5.048 4.163a.31.31 0 0 1 .571 0l.46 1.107a.31.31 0 0 0 .262.19l1.194.095a.31.31 0 0 1 .177.544l-.91.78a.31.31 0 0 0-.1.307l.278 1.166a.31.31 0 0 1-.462.336l-1.023-.625a.31.31 0 0 0-.323 0l-1.023.625a.31.31 0 0 1-.462-.336l.278-1.166a.31.31 0 0 0-.1-.307l-.91-.78a.31.31 0 0 1 .176-.544l1.195-.095a.31.31 0 0 0 .261-.19zm.571 7.429a.31.31 0 0 0-.571 0l-.46 1.107a.31.31 0 0 1-.262.19l-1.195.095a.31.31 0 0 0-.176.544l.91.78a.31.31 0 0 1 .1.306l-.278 1.166a.31.31 0 0 0 .462.336l1.023-.625a.31.31 0 0 1 .323 0l1.023.625a.31.31 0 0 0 .462-.336l-.278-1.166a.31.31 0 0 1 .1-.307l.91-.78a.31.31 0 0 0-.177-.543l-1.194-.096a.31.31 0 0 1-.262-.19zm5.905 1.578a.83.83 0 1 0 0 1.66h13a.83.83 0 1 0 0-1.66zm0-7.429a.83.83 0 1 0 0 1.66h13a.83.83 0 0 0 0-1.66zm-6.476 13.28a.31.31 0 0 1 .571 0l.46 1.106a.31.31 0 0 0 .262.19l1.194.096a.31.31 0 0 1 .177.543l-.91.78a.31.31 0 0 0-.1.307l.278 1.166a.31.31 0 0 1-.462.336l-1.023-.625a.31.31 0 0 0-.323 0l-1.023.625a.31.31 0 0 1-.462-.336l.278-1.166a.31.31 0 0 0-.1-.307l-.91-.78a.31.31 0 0 1 .176-.543l1.195-.096a.31.31 0 0 0 .261-.19zm6.476 1.578a.83.83 0 1 0 0 1.66h13a.83.83 0 1 0 0-1.66z" clip-rule="evenodd"/></svg>
  );
}
