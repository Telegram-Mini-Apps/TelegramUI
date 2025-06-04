/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface DeleteBackwardFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function DeleteBackwardFill28({ size = 28, ...props }: DeleteBackwardFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="m22.9 25.143-10.383-.012q-.706 0-1.34-.156a4.5 4.5 0 0 1-1.197-.466 4.7 4.7 0 0 1-1.052-.838L1.87 16.386q-.586-.61-.862-1.16a2.5 2.5 0 0 1-.275-1.113q0-.383.12-.742.12-.37.37-.754.251-.383.647-.777l7.046-7.321a4.4 4.4 0 0 1 1.053-.826 4.4 4.4 0 0 1 1.196-.443q.635-.13 1.34-.131H22.9q1.88 0 2.812.933.945.922.945 2.775v14.607q0 1.854-.945 2.775-.933.933-2.812.934m-11.04-5.994q.43 0 .73-.287l3.301-3.326 3.314 3.326a.94.94 0 0 0 .706.287.96.96 0 0 0 .706-.287 1 1 0 0 0 .287-.706q0-.442-.287-.706l-3.326-3.313 3.337-3.326a1 1 0 0 0 .288-.706.95.95 0 0 0-.288-.694.95.95 0 0 0-.693-.287.93.93 0 0 0-.682.287L15.89 12.75l-3.338-3.326a1 1 0 0 0-.693-.275.95.95 0 0 0-.694.287.92.92 0 0 0-.287.694q0 .395.287.694l3.326 3.314-3.326 3.325a.95.95 0 0 0-.287.694q0 .407.287.706a.95.95 0 0 0 .694.287"/></svg>
  );
}
