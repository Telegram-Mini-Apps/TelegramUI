/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface DocOnDocFill28Props extends SvgAttributes {
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

export function DocOnDocFill28({ size = 28, color = 'currentColor', ...props }: DocOnDocFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="m17.937 2.937 4.126 4.126c.346.346.519.519.642.72q.121.198.194.417H19.2c-.573 0-.955 0-1.248-.025-.285-.023-.415-.064-.497-.106a1.2 1.2 0 0 1-.524-.524c-.042-.083-.083-.213-.106-.497A17 17 0 0 1 16.8 5.8V2.101q.219.073.417.194c.201.123.374.296.72.642M15.2 2h-2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C10 3.52 10 4.08 10 5.2v2.22h1.034c.134 0 .28 0 .428.012a3.58 3.58 0 0 1 2.027.84c.113.095.217.2.312.294l.023.024 4.586 4.586.024.024a3.58 3.58 0 0 1 1.134 2.338c.012.147.012.294.012.428V19h.22c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C23 17.48 23 16.92 23 15.8v-6h-3.832c-.533 0-.98 0-1.347-.03-.383-.031-.747-.1-1.092-.275a2.8 2.8 0 0 1-1.224-1.224c-.176-.345-.244-.71-.275-1.092-.03-.367-.03-.814-.03-1.347zm1.863 12.063-4.126-4.126c-.346-.346-.519-.519-.72-.642A2 2 0 0 0 11.8 9.1v3.7c0 .573 0 .955.025 1.249.023.284.064.414.106.496a1.2 1.2 0 0 0 .524.524c.082.042.213.083.496.106.294.024.676.025 1.249.025h3.699a2 2 0 0 0-.194-.417c-.123-.201-.296-.374-.642-.72M8.2 9h2v3.832c0 .533 0 .98.03 1.347.031.383.1.747.275 1.092a2.8 2.8 0 0 0 1.224 1.224c.345.176.71.244 1.092.275.367.03.814.03 1.347.03H18v6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C16.48 26 15.92 26 14.8 26H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 24.48 5 23.92 5 22.8V12.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 9 7.08 9 8.2 9" clip-rule="evenodd"/></svg>
  );
}
