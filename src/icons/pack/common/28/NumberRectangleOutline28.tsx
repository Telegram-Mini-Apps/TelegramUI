/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface NumberRectangleOutline28Props extends SvgAttributes {
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

export function NumberRectangleOutline28({ size = 28, color = 'currentColor', ...props }: NumberRectangleOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M7.766 5.2h12.468c.811 0 1.468 0 2.001.044.55.044 1.038.14 1.49.37a3.8 3.8 0 0 1 1.66 1.66c.231.453.326.94.371 1.49.044.533.044 1.19.044 2.002v6.468c0 .811 0 1.469-.044 2.002-.044.55-.14 1.037-.37 1.49a3.8 3.8 0 0 1-1.66 1.66c-.453.23-.94.326-1.49.37-.534.044-1.19.044-2.002.044H7.766c-.811 0-1.469 0-2.002-.044-.55-.044-1.037-.14-1.49-.37a3.8 3.8 0 0 1-1.66-1.66c-.23-.453-.326-.94-.37-1.49-.044-.533-.044-1.19-.044-2.002v-6.468c0-.811 0-1.469.043-2.002.045-.55.14-1.037.371-1.49a3.8 3.8 0 0 1 1.66-1.66c.453-.23.94-.326 1.49-.37.533-.044 1.19-.044 2.002-.044M5.895 6.838c-.451.037-.705.105-.894.202A2.2 2.2 0 0 0 4.04 8c-.097.19-.165.443-.202.894-.037.46-.038 1.052-.038 1.905v6.4c0 .853 0 1.445.038 1.905.037.451.105.704.202.894.21.414.547.75.961.961.19.097.443.165.894.202.46.037 1.052.038 1.905.038h12.4c.853 0 1.445 0 1.905-.038.451-.037.704-.105.894-.202A2.2 2.2 0 0 0 23.96 20c.097-.19.165-.443.202-.894.037-.46.038-1.052.038-1.905v-6.4c0-.853 0-1.445-.038-1.905-.037-.451-.105-.704-.202-.894A2.2 2.2 0 0 0 23 7.04c-.19-.097-.443-.165-.894-.202-.46-.037-1.052-.038-1.905-.038H7.8c-.853 0-1.445 0-1.905.038" clip-rule="evenodd"/><path fill={color} fill-rule="evenodd" d="M10.567 17.809a.75.75 0 1 0 1.477.26l.232-1.319h2.477l-.186 1.059a.75.75 0 1 0 1.477.26l.232-1.319h.974a.75.75 0 0 0 0-1.5h-.71l.442-2.5h1.267a.75.75 0 0 0 0-1.5h-1.003l.187-1.059a.75.75 0 0 0-1.477-.26l-.233 1.319h-2.477l.187-1.059a.75.75 0 0 0-1.477-.26l-.233 1.319h-.973a.75.75 0 0 0 0 1.5h.709l-.441 2.5H9.75a.75.75 0 0 0 0 1.5h1.003zm1.974-2.559h2.477l.44-2.5h-2.476z" clip-rule="evenodd"/></svg>
  );
}
