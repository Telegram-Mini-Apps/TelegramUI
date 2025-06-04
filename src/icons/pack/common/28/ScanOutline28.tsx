/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ScanOutline28Props extends SvgAttributes {
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

export function ScanOutline28({ size = 28, color = 'currentColor', ...props }: ScanOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M8.762 3.1H10a.9.9 0 0 1 0 1.8H8.8c-.855 0-1.442 0-1.897.038-.445.036-.684.103-.856.19a2.1 2.1 0 0 0-.918.919c-.088.172-.155.411-.191.856C4.9 7.358 4.9 7.945 4.9 8.8V10a.9.9 0 1 1-1.8 0V8.762c0-.808 0-1.469.044-2.006.045-.556.142-1.058.381-1.527a3.9 3.9 0 0 1 1.704-1.704c.47-.239.971-.336 1.527-.381C7.293 3.1 7.954 3.1 8.762 3.1m0 21.8H10a.9.9 0 1 0 0-1.8H8.8c-.855 0-1.442 0-1.897-.038-.445-.036-.684-.103-.856-.19a2.1 2.1 0 0 1-.918-.919c-.088-.172-.155-.411-.191-.856C4.9 20.642 4.9 20.055 4.9 19.2V18a.9.9 0 0 0-1.8 0v1.238c0 .808 0 1.469.044 2.006.045.556.142 1.058.381 1.527a3.9 3.9 0 0 0 1.704 1.704c.47.239.971.336 1.527.381.537.044 1.198.044 2.006.044M19.2 3.1h.038c.808 0 1.469 0 2.006.044.556.045 1.058.142 1.526.381a3.9 3.9 0 0 1 1.705 1.704c.239.47.336.971.381 1.527.044.537.044 1.198.044 2.006V10a.9.9 0 0 1-1.8 0V8.8c0-.855 0-1.442-.038-1.897-.036-.445-.103-.684-.19-.856a2.1 2.1 0 0 0-.919-.918c-.172-.088-.411-.155-.856-.191C20.642 4.9 20.055 4.9 19.2 4.9H18a.9.9 0 1 1 0-1.8zm.038 21.8H18a.9.9 0 1 1 0-1.8h1.2c.855 0 1.442 0 1.897-.038.445-.036.683-.103.856-.19a2.1 2.1 0 0 0 .918-.919c.088-.172.155-.411.191-.856.037-.455.038-1.042.038-1.897V18a.9.9 0 0 1 1.8 0v1.238c0 .808 0 1.469-.044 2.006-.045.556-.142 1.058-.381 1.527a3.9 3.9 0 0 1-1.705 1.704c-.468.239-.97.336-1.526.381-.537.044-1.198.044-2.006.044M8 13.1a.9.9 0 1 0 0 1.8h12a.9.9 0 0 0 0-1.8z" clip-rule="evenodd"/></svg>
  );
}
