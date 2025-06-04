/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PercentCircleFill28Props extends SvgAttributes {
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

export function PercentCircleFill28({ size = 28, color = 'currentColor', ...props }: PercentCircleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} d="M11.079 12.324q-.205.392-.597.392t-.601-.392q-.204-.398-.204-1.16 0-.747.204-1.14.21-.39.601-.391.392 0 .597.392.21.391.209 1.139 0 .762-.21 1.16m7.021 4.893q-.205.397-.597.397t-.601-.397q-.204-.398-.204-1.155 0-.751.204-1.139.21-.392.601-.392.392 0 .597.392.21.387.209 1.139 0 .758-.21 1.155"/><path fill={color} fill-rule="evenodd" d="M14 2.501c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.924 11-11-4.925-11-11-11M8.892 13.103q.591.703 1.59.703 1.005 0 1.59-.703.586-.71.586-1.94 0-1.24-.591-1.928-.586-.687-1.585-.687-.993 0-1.584.693-.591.687-.591 1.923t.585 1.938m7.02 4.893q.591.703 1.59.703 1.005 0 1.59-.709.585-.704.586-1.928 0-1.24-.591-1.928-.585-.693-1.585-.693-.993 0-1.584.693-.591.686-.591 1.928 0 1.235.585 1.934m-5.575.257a.6.6 0 0 0 .296.409q.225.128.494.08a.64.64 0 0 0 .435-.29l5.973-8.937a.67.67 0 0 0 .112-.537.6.6 0 0 0-.3-.414.65.65 0 0 0-.479-.065.73.73 0 0 0-.43.312l-5.972 8.91q-.182.27-.129.532" clip-rule="evenodd"/></svg>
  );
}
