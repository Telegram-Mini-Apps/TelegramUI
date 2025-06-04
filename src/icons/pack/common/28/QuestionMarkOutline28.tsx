/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface QuestionMarkOutline28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function QuestionMarkOutline28({ size = 28, ...props }: QuestionMarkOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M14 3.8C8.367 3.8 3.8 8.367 3.8 14S8.367 24.2 14 24.2 24.2 19.633 24.2 14 19.633 3.8 14 3.8M2.2 14C2.2 7.483 7.483 2.2 14 2.2S25.8 7.483 25.8 14 20.517 25.8 14 25.8 2.2 20.517 2.2 14m14.355-5.589c.751.592 1.245 1.49 1.245 2.633 0 1.013-.235 1.767-.672 2.346-.419.555-.967.865-1.363 1.089-.437.247-.69.393-.876.615-.152.182-.31.486-.31 1.138a.835.835 0 0 1-1.67 0c0-.957.245-1.665.697-2.207.39-.468.896-.752 1.26-.957l.078-.043c.41-.232.666-.396.851-.64.167-.222.335-.595.335-1.341 0-.618-.248-1.037-.609-1.321-.382-.302-.93-.476-1.52-.475-.587.001-1.137.178-1.522.482-.362.286-.609.705-.609 1.314a.835.835 0 0 1-1.67 0c0-1.139.495-2.034 1.245-2.625.727-.575 1.66-.84 2.553-.841.894-.002 1.828.259 2.557.833m-2.793 12.18a1.165 1.165 0 1 0 0-2.33 1.165 1.165 0 0 0 0 2.33" clip-rule="evenodd"/></svg>
  );
}
