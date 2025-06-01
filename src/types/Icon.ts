/* eslint-disable unicorn/filename-case */

import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Icon extends SvgAttributes {
  title?: string;

  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   */
  size?: SvgAttributes['width'];
}
