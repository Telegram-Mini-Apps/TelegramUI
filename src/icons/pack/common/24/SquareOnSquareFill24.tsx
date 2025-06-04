/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface SquareOnSquareFill24Props extends SvgAttributes {
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

export function SquareOnSquareFill24({ size = 24, color = 'currentColor', ...props }: SquareOnSquareFill24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="m7.742 5.5-.666.001a2.7 2.7 0 0 1 .251-.863 3 3 0 0 1 1.311-1.311C9.28 3 10.12 3 11.8 3h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v4.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311 2.7 2.7 0 0 1-.863.25l.001-.665v-4.516c0-.79 0-1.473-.046-2.035-.048-.593-.155-1.182-.445-1.75a4.5 4.5 0 0 0-1.966-1.967c-.568-.289-1.157-.396-1.75-.444-.562-.046-1.244-.046-2.035-.046zM3.327 8.638C3 9.28 3 10.12 3 11.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C17 18.72 17 17.88 17 16.2v-4.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 7 13.88 7 12.2 7H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311" clip-rule="evenodd"/></svg>
  );
}
