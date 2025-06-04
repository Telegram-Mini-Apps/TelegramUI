/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Fragment28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function Fragment28({ size = 28, ...props }: Fragment28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m2.96 6.858.269.117 10.308 4.556c.261.132.598.111 1.027-.08l10.41-4.606c.555-.2.252-.82-.194-.759h-.27L3.188 6c-.598.025-.766.625-.228.858m-.85 2.4 9.963 15.48c.311.507 1.094.221 1.077-.232l-.017-10.621c-.008-.602-.168-.733-.538-.898L2.63 8.555c-.37-.205-.85.131-.522.702m12.757 15.115-.025-10.681c0-.157.016-.28.067-.382a.6.6 0 0 1 .283-.255l.028-.014 9.871-4.45c.657-.31 1.103.216.825.677l-.909 1.403v.007l-.16.245-.185.287-8.659 13.414c-.412.6-1.128.47-1.136-.25" clip-rule="evenodd"/></svg>
  );
}
