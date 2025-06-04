/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface SquareAndArrowUp24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function SquareAndArrowUp24({ size = 24, ...props }: SquareAndArrowUp24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M12.707 2.71a1 1 0 0 0-1.414 0l-4.85 4.85a1 1 0 0 0 1.414 1.414L11 5.83v8.365a1 1 0 1 0 2 0V5.83l3.143 3.144a1 1 0 1 0 1.414-1.415zM5.455 14.732a1 1 0 1 0-2 0v1.441c0 .57 0 1.058.033 1.458.034.421.11.834.311 1.229a3.16 3.16 0 0 0 1.38 1.379c.394.201.807.277 1.228.311.4.033.888.033 1.458.033h8.27c.57 0 1.058 0 1.458-.033.421-.034.834-.11 1.229-.311a3.16 3.16 0 0 0 1.379-1.38c.201-.394.277-.807.311-1.228.033-.4.033-.888.033-1.458v-1.44a1 1 0 1 0-2 0v1.4c0 .62 0 1.026-.026 1.335-.024.298-.066.418-.1.484-.11.217-.288.394-.505.505-.066.034-.186.076-.484.1-.31.025-.714.026-1.334.026H7.904c-.62 0-1.025-.001-1.334-.026-.298-.024-.418-.067-.484-.1a1.16 1.16 0 0 1-.505-.505c-.034-.066-.075-.186-.1-.484-.025-.31-.026-.714-.026-1.334z" clip-rule="evenodd"/></svg>
  );
}
