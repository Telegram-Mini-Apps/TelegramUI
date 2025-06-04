/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface BotOutline28Props extends SvgAttributes {
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

export function BotOutline28({ size = 28, color = 'currentColor', ...props }: BotOutline28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M7.4 12a6.6 6.6 0 0 1 13.2 0v1a1.1 1.1 0 0 1-1.1 1.1h-11A1.1 1.1 0 0 1 7.4 13zm-1.741-1a8.401 8.401 0 0 1 16.682 0h.059v7.496c0 .928 0 1.595-.177 2.164a3.9 3.9 0 0 1-2.563 2.563c-.57.178-1.237.178-2.164.177h-6.992c-.927 0-1.595 0-2.164-.177a3.9 3.9 0 0 1-2.563-2.563c-.178-.57-.178-1.237-.177-2.164V11zM7.4 15.684v2.662c0 1.141.01 1.507.095 1.779a2.1 2.1 0 0 0 1.38 1.38c.272.085.638.095 1.779.095h6.692c1.141 0 1.507-.01 1.779-.095a2.1 2.1 0 0 0 1.38-1.38c.085-.272.095-.638.095-1.779v-2.662c-.34.14-.71.216-1.1.216h-11c-.39 0-.76-.077-1.1-.216M3.5 12.1a.9.9 0 0 1 .9.9v5a.9.9 0 1 1-1.8 0v-5a.9.9 0 0 1 .9-.9m21.9.9a.9.9 0 0 0-1.8 0v5a.9.9 0 1 0 1.8 0zm-14.9-2.75a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0zm6.25-.75a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75" clip-rule="evenodd"/></svg>
  );
}
