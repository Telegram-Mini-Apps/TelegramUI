/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Fragment24Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 24
   */
  size?: SvgAttributes['width'];
}

export function Fragment24({ size = 24, ...props }: Fragment24Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={size} height={size} {...props}><path fill="currentColor" fill-rule="evenodd" d="m2.34 4.75.235.103 9.02 3.987c.228.115.523.097.899-.07l9.108-4.03c.486-.175.22-.718-.17-.665h-.235L2.538 4c-.523.022-.67.547-.198.75m-.744 2.1 8.718 13.546c.272.443.957.193.942-.204l-.014-9.293c-.008-.526-.148-.641-.472-.785L2.052 6.235c-.324-.179-.743.116-.456.615m11.163 13.227-.023-9.347c0-.137.015-.244.06-.334a.53.53 0 0 1 .22-.21q.012-.007.027-.013l.025-.012 8.637-3.894c.574-.27.965.189.722.592l-.796 1.228v.006l-.14.214-.162.252-7.576 11.737c-.361.524-.987.41-.994-.22" clip-rule="evenodd"/></svg>
  );
}
