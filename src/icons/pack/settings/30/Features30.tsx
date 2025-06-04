/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Features30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
  /**
   * Icon color. It is automatically applied to all fill attributes of nested SVG elements.
   * @default 'currentColor'
   */
  color?: SvgAttributes['fill'];
}

export function Features30({ size = 30, color = 'currentColor', ...props }: Features30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" fill-rule="evenodd" d="M16.67 20.699c-.19.051-.506.051-1.138.051h-1.065c-.631 0-.947 0-1.138-.051-.133-.036-.195-.051-.25-.077-.057-.026-.108-.063-.222-.143-.161-.113-.534-.556-1.28-1.443a19 19 0 0 0-.963-1.03C9.375 16.746 8 15.346 8 13c0-4 1.5-7.75 7-7.75S22 9 22 13c0 2.345-1.375 3.745-2.614 5.006-.342.348-.674.686-.963 1.03-.746.887-1.119 1.33-1.28 1.443-.114.08-.165.117-.221.143s-.118.041-.251.077M12.5 22.75a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1 2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2" clip-rule="evenodd"/></svg>
  );
}
