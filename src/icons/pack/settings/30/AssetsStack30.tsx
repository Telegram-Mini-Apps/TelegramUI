/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface AssetsStack30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function AssetsStack30({ size = 30, ...props }: AssetsStack30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M6.272 7.365C6 7.9 6 8.6 6 10v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C7.9 20 8.6 20 10 20h10c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C24 18.1 24 17.4 24 16v-6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C22.1 6 21.4 6 20 6H10c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093m1.804 13.91q.032.129.087.236a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163h9.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656q.054-.107.087-.236l-.174.017c-.471.038-1.043.038-1.7.038H9.95c-.657 0-1.229 0-1.7-.038zm1.96 2.385c.02.127.052.233.1.328.12.235.311.426.547.546.267.136.617.136 1.317.136h6c.7 0 1.05 0 1.318-.136a1.25 1.25 0 0 0 .546-.546c.048-.095.08-.2.1-.328z" clip-rule="evenodd"/></svg>
  );
}
