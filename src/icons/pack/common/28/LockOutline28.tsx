/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface LockOutline28Props extends SvgAttributes {
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

export function LockOutline28({ size = 28, color = 'currentColor', ...props }: LockOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M8.2 8a5.8 5.8 0 0 1 11.6 0v2.218q.231.009.435.025c.55.045 1.038.14 1.49.371a3.8 3.8 0 0 1 1.66 1.66c.231.453.326.94.371 1.49.044.533.044 1.19.044 2.002v4.468c0 .811 0 1.469-.044 2.001-.044.55-.14 1.038-.37 1.49a3.8 3.8 0 0 1-1.66 1.66c-.453.231-.94.327-1.49.371-.534.044-1.19.044-2.002.044H9.766c-.811 0-1.469 0-2.002-.044-.55-.044-1.037-.14-1.49-.37a3.8 3.8 0 0 1-1.66-1.66c-.23-.453-.326-.94-.37-1.49-.044-.533-.044-1.19-.044-2.002v-4.468c0-.811 0-1.469.043-2.001.045-.55.14-1.038.371-1.49a3.8 3.8 0 0 1 1.66-1.66c.453-.231.94-.327 1.49-.372q.205-.015.436-.025zm-.305 3.838c.46-.037 1.052-.038 1.905-.038h8.4c.853 0 1.445 0 1.905.038.451.037.704.105.894.202.414.21.75.547.961.961.097.19.165.443.202.894.037.46.038 1.052.038 1.905v4.4c0 .853 0 1.445-.038 1.905-.037.451-.105.704-.202.894a2.2 2.2 0 0 1-.961.961c-.19.097-.443.165-.894.202-.46.037-1.052.038-1.905.038H9.8c-.853 0-1.445 0-1.905-.038-.451-.037-.705-.105-.894-.202A2.2 2.2 0 0 1 6.04 23c-.097-.19-.165-.443-.202-.894-.037-.46-.038-1.052-.038-1.905v-4.4c0-.853 0-1.445.038-1.905.037-.451.105-.704.202-.894A2.2 2.2 0 0 1 7 12.04c.19-.097.443-.165.894-.202M18.2 8v2.2H9.8V8a4.2 4.2 0 0 1 8.4 0M14 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>
  );
}
