/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface LockShieldFilled28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function LockShieldFilled28({ size = 28, ...props }: LockShieldFilled28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M5.128 7.164C5 7.504 5 7.899 5 8.689v8.6a4.42 4.42 0 0 0 1.768 3.537 31 31 0 0 0 4.727 2.922l1.679.839c.52.26 1.132.26 1.652 0l1.679-.84a31 31 0 0 0 4.727-2.921A4.42 4.42 0 0 0 23 17.29V8.689c0-.79 0-1.185-.128-1.525a2 2 0 0 0-.537-.785c-.27-.243-.639-.386-1.375-.672l-4.64-1.805c-.858-.333-1.287-.5-1.729-.566a4 4 0 0 0-1.182 0c-.442.066-.871.233-1.729.566L7.04 5.707c-.736.286-1.104.429-1.375.672a2 2 0 0 0-.537.785M11.5 10.5a2.5 2.5 0 1 1 5 0V12h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5zm4 0V12h-3v-1.5a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/></svg>
  );
}
