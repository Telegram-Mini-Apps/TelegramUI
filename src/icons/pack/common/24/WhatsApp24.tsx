/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface WhatsApp24Props extends SvgAttributes {
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

export function WhatsApp24({ size = 24, color = 'currentColor', ...props }: WhatsApp24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill={color} d="M12.542 2.323c-5.49 0-9.956 4.302-9.958 9.59a9.3 9.3 0 0 0 1.329 4.795L2.5 21.678l5.28-1.334a10.25 10.25 0 0 0 4.758 1.168c5.264 0 9.96-4.216 9.962-9.591.001-2.562-1.034-4.973-2.914-6.785s-4.38-2.813-7.044-2.813m-.003 17.569c-1.622 0-3.12-.488-4.516-1.284l-3.132.79.836-2.941c-.898-1.376-1.463-2.881-1.462-4.544.001-4.396 3.715-7.97 8.28-7.97 2.21 0 4.289.83 5.852 2.337 1.563 1.506 2.423 3.51 2.422 5.64-.002 4.468-3.905 7.972-8.28 7.972m4.543-5.971c-.25-.12-1.472-.7-1.7-.78-.229-.08-.394-.121-.56.119-.165.24-.643.78-.787.94-.146.16-.291.179-.54.06-.25-.12-1.051-.374-2-1.19-.74-.635-1.24-1.42-1.385-1.66s-.016-.37.109-.489c.111-.106.249-.28.373-.42.123-.14.165-.24.249-.4.082-.158.04-.3-.022-.418-.062-.121-.559-1.3-.767-1.78-.202-.467-.407-.404-.56-.412a12 12 0 0 0-.477-.008.93.93 0 0 0-.663.3c-.228.24-.871.819-.871 1.998s.891 2.32 1.016 2.48c.124.159 1.755 2.58 4.25 3.619.594.246 1.058.393 1.42.504.596.183 1.138.157 1.566.095.478-.069 1.473-.579 1.68-1.138.207-.56.207-1.04.145-1.14-.06-.1-.227-.16-.476-.28"/></svg>
  );
}
