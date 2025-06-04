/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ShieldLefthalfFill28Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: SvgAttributes['width'];
}

export function ShieldLefthalfFill28({ size = 28, ...props }: ShieldLefthalfFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill="currentColor" d="M4 16.032v-9.09q0-.938.392-1.342.405-.416 1.153-.725.415-.178 1.152-.463t1.628-.618 1.77-.653a57 57 0 0 1 1.628-.583q.736-.26 1.164-.38.238-.06.487-.119a2.15 2.15 0 0 1 .998 0 5 5 0 0 1 .5.12q.415.141 1.152.403t1.627.582q.892.321 1.77.654.892.321 1.628.606.738.273 1.153.451.76.321 1.152.725.393.404.393 1.343v9.089q0 1.627-.476 2.84-.464 1.2-1.52 2.233-1.058 1.034-2.805 2.127a91 91 0 0 1-4.277 2.53q-.225.12-.44.179-.213.06-.356.059-.143 0-.356-.06a2.2 2.2 0 0 1-.44-.178 100 100 0 0 1-4.277-2.53q-1.734-1.105-2.792-2.139T4.475 18.86 4 16.032m10.123 7.77q.106-.035.226-.095.13-.06.26-.143 2.057-1.247 3.446-2.15 1.403-.903 2.234-1.711.844-.809 1.2-1.77.368-.963.368-2.34V7.31q0-.297-.083-.452-.07-.154-.309-.237-.558-.19-1.283-.44-.713-.261-1.509-.546-.784-.285-1.58-.57-.784-.298-1.497-.56a95 95 0 0 1-1.248-.486.5.5 0 0 0-.13-.048l-.095-.023z"/></svg>
  );
}
