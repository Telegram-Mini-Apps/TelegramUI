/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ExclamationMarkTriangleFill28Props extends SvgAttributes {
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

export function ExclamationMarkTriangleFill28({ size = 28, color = 'currentColor', ...props }: ExclamationMarkTriangleFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M12.78 3.26c-.89.396-1.572 1.577-2.937 3.94L3.435 18.3c-1.364 2.363-2.046 3.544-1.945 4.514a3 3 0 0 0 1.22 2.113c.79.573 2.153.573 4.882.573h12.817c2.728 0 4.092 0 4.88-.573a3 3 0 0 0 1.221-2.113c.102-.97-.58-2.151-1.944-4.514L18.157 7.2c-1.364-2.363-2.046-3.544-2.937-3.94a3 3 0 0 0-2.44 0m2.301 7.34-.114 6.45a.967.967 0 0 1-1.933 0l-.114-6.45a1.08 1.08 0 1 1 2.161 0m.17 9.9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"/></svg>
  );
}
