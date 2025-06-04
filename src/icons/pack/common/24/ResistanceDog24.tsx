/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ResistanceDog24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function ResistanceDog24({ size = 24, color = 'currentColor', ...props }: ResistanceDog24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M19.753 16.645c-.176-.887-.284-1.618-.838-5.635-.908-6.58-6.984-12.59-11.608-5.186-1.583 2.534-2.18 5.35-2.786 8.198q-.129.612-.262 1.223c-.17.783-.252 1.752-.058 2.038.37.543 1.009.96 1.666 1.39.236.154.473.309.702.472.897.641 3.038 1.833 4.367 2.518 1.154.594 2.362-.057 2.985-.393a6 6 0 0 1 .24-.125c.537-.255 3.976-1.914 5.092-2.631.864-.556.674-1.233.55-1.67q-.032-.11-.05-.199m-4.872 2.121c-.974 1.27-1.99 1.479-2.892 1.414-2.281-.165-3.774-3.476-4.364-5.315-.84-2.314.05-2.925.425-3.182q.054-.037.092-.066c.28-.221 1.239-.445 2.052.222.806.661 1.14.786 1.795.773.54-.011 1.419-.482 1.976-.781.179-.096.325-.174.416-.214.544-.237 1.408-.279 2.164.516.714.753.513 2.023.184 3.219-.35 1.275-.873 2.144-1.848 3.414m-.845-.557c.29-.48.45-1.12.33-1.751-.29-1.532-3.293-1.57-4.154-.68-.666.69-.283 2.091.325 2.672.928.887 2.776.954 3.499-.24" clip-rule="evenodd"/></svg>
  );
}
