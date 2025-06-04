/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface EyeSlashFillAndroid28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function EyeSlashFillAndroid28({ size = 28, ...props }: EyeSlashFillAndroid28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5.866 5.234a.8.8 0 0 0-1.132 1.132l17 17a.8.8 0 1 0 1.132-1.132zM2.8 14.3c0-1.525 1.033-3.565 2.967-5.204l3.185 3.185a5.25 5.25 0 0 0 6.867 6.867l2.413 2.412c-1.303.463-2.784.74-4.432.74-7 0-11-5-11-8m7.25 0q.001-.428.092-.83l4.488 4.488q-.401.091-.83.092a3.75 3.75 0 0 1-3.75-3.75m2.92-3.658 4.488 4.488q.091-.401.092-.83a3.75 3.75 0 0 0-4.58-3.658m6.08 3.658c0 .715-.143 1.398-.402 2.02l3.185 3.184c1.934-1.639 2.967-3.68 2.967-5.204 0-3-4-8-11-8-1.648 0-3.13.277-4.432.74l2.413 2.412a5.25 5.25 0 0 1 7.27 4.848" clip-rule="evenodd"/></svg>
  );
}
