/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BuildingColumns28Props extends SvgAttributes {
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

export function BuildingColumns28({ size = 28, color = 'currentColor', ...props }: BuildingColumns28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M13.642 2.284a.8.8 0 0 1 .716 0l10 5A.8.8 0 0 1 24 8.8H4a.8.8 0 0 1-.358-1.516zM7.39 7.2h13.22L14 3.894zM3.2 24a.8.8 0 0 1 .8-.8h20a.8.8 0 1 1 0 1.6H4a.8.8 0 0 1-.8-.8m1.499-12.95a.8.8 0 0 1 .8-.8h2a.8.8 0 1 1 0 1.6h-.2v8.4h.2a.8.8 0 1 1 0 1.6h-2a.8.8 0 0 1 0-1.6h.2v-8.4h-.2a.8.8 0 0 1-.8-.8m5 0a.8.8 0 0 1 .8-.8h2a.8.8 0 1 1 0 1.6h-.2v8.4h.2a.8.8 0 1 1 0 1.6h-2a.8.8 0 0 1 0-1.6h.2v-8.4h-.2a.8.8 0 0 1-.8-.8m5.8-.8a.8.8 0 1 0 0 1.6h.2v8.4h-.2a.8.8 0 1 0 0 1.6h2a.8.8 0 0 0 0-1.6h-.2v-8.4h.2a.8.8 0 0 0 0-1.6zm4.2.8a.8.8 0 0 1 .8-.8h2a.8.8 0 1 1 0 1.6h-.2v8.4h.2a.8.8 0 1 1 0 1.6h-2a.8.8 0 0 1 0-1.6h.2v-8.4h-.2a.8.8 0 0 1-.8-.8" clip-rule="evenodd"/></svg>
  );
}
