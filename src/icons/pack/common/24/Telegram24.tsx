/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Telegram24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function Telegram24({ size = 24, ...props }: Telegram24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" d="M3.582 11.77q7.594-3.306 10.126-4.36c4.824-2.007 5.825-2.355 6.479-2.367.143-.002.464.033.673.202.173.143.222.335.247.47.021.136.051.444.027.684-.26 2.746-1.392 9.409-1.967 12.484-.242 1.302-.722 1.738-1.186 1.78-1.01.093-1.775-.666-2.751-1.306-1.528-1.002-2.39-1.625-3.875-2.603-1.715-1.13-.602-1.75.375-2.766.255-.265 4.699-4.307 4.783-4.673.01-.046.022-.217-.081-.307-.1-.09-.25-.06-.358-.035-.155.035-2.594 1.648-7.326 4.841q-1.038.714-1.883.696c-.619-.013-1.813-.35-2.7-.639-1.085-.353-1.95-.54-1.875-1.14q.058-.47 1.292-.96"/></svg>
  );
}
