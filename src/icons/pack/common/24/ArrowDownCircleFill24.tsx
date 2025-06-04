/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ArrowDownCircleFill24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function ArrowDownCircleFill24({ size = 24, ...props }: ArrowDownCircleFill24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12 21.5a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 1 0-9.5 9.5m-.532-4.684a.75.75 0 0 0 1.06 0l3.43-3.428a.75.75 0 0 0-1.062-1.061l-2.148 2.148v-6.76a.75.75 0 0 0-1.5 0v6.76L9.1 12.327a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"/></svg>
  );
}
