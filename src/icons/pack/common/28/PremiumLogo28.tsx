/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface PremiumLogo28Props extends SvgAttributes {
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

export function PremiumLogo28({ size = 28, color = 'currentColor', ...props }: PremiumLogo28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="m9.881 8.908 2.887-5.633a1.349 1.349 0 0 1 2.395.01l2.726 5.432c.223.444.658.747 1.157.806l5.708.67a1.396 1.396 0 0 1 1.236 1.547 1.38 1.38 0 0 1-.413.828l-4.512 4.36a.8.8 0 0 0-.239.674l.75 5.886c.107.842-.5 1.611-1.355 1.717a1.6 1.6 0 0 1-.94-.175l-4.768-2.552a1.2 1.2 0 0 0-1.11-.014l-4.938 2.482a1.424 1.424 0 0 1-1.901-.606 1.37 1.37 0 0 1-.14-.83l.394-2.7a4.1 4.1 0 0 1 2.236-3.072l5.485-2.745a.29.29 0 0 0 .13-.394.3.3 0 0 0-.307-.157l-6.708.942a3.76 3.76 0 0 1-2.87-.783L2.55 12.814a1.45 1.45 0 0 1-.217-2.06c.24-.292.587-.481.966-.529l5.728-.722c.367-.047.687-.27.854-.595" clip-rule="evenodd"/></svg>
  );
}
