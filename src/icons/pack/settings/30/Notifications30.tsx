/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Notifications30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function Notifications30({ size = 30, ...props }: Notifications30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" d="M17.046 6.121a2.427 2.427 0 0 0-4.217.22l-.137.275a.98.98 0 0 1-.604.502l-.478.136a4 4 0 0 0-2.882 3.449l-.552 5.521a5 5 0 0 1-1.44 3.038l-.03.03c-.63.63-.185 1.708.706 1.708h15.172c.89 0 1.337-1.077.707-1.707l-.031-.03a5 5 0 0 1-1.44-3.039l-.202-2.024q-.54.129-1.12.13a4.83 4.83 0 0 1-3.452-8.209"/><path fill="#fff" d="M17.93 7.123a3.5 3.5 0 1 0 5.137 4.755 3.5 3.5 0 0 0-5.138-4.755M15 24.5a2.5 2.5 0 0 0 2.5-2.5h-5a2.5 2.5 0 0 0 2.5 2.5"/></svg>
  );
}
