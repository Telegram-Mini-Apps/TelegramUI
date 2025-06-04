/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Telegram28Props extends SvgAttributes {
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

export function Telegram28({ size = 28, color = 'currentColor', ...props }: Telegram28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} d="M3.012 13.733q8.86-3.86 11.814-5.09c5.628-2.34 6.796-2.746 7.558-2.76.168-.002.542.04.785.237.203.166.26.39.289.548.025.158.06.517.031.797-.303 3.204-1.623 10.978-2.295 14.566-.281 1.518-.842 2.027-1.383 2.076-1.177.109-2.07-.777-3.21-1.524-1.782-1.169-2.788-1.896-4.52-3.037-2-1.318-.703-2.042.437-3.226.297-.31 5.482-5.025 5.58-5.453.013-.053.026-.253-.094-.358-.117-.105-.292-.069-.418-.04-.18.04-3.026 1.923-8.547 5.648q-1.21.832-2.197.811c-.721-.015-2.114-.409-3.15-.745-1.265-.412-2.275-.63-2.187-1.331q.068-.547 1.507-1.12"/></svg>
  );
}
