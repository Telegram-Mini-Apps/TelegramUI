/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface Announcements30Props extends SvgAttributes {
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

export function Announcements30({ size = 30, color = 'currentColor', ...props }: Announcements30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill={color} rx="7"/><path fill="#fff" d="M8.887 18.01q-1.658 0-2.522-.841-.865-.84-.865-2.433v-1.18q0-1.593.865-2.433.864-.84 2.522-.84h1.737v7.726zm2.845.007v-7.735a25 25 0 0 0 2.328-.38q1.293-.267 2.602-.679a17 17 0 0 0 2.441-.961v11.767a17 17 0 0 0-2.384-.945 25 25 0 0 0-2.563-.679 25 25 0 0 0-2.424-.388m10.12 3.985a1.7 1.7 0 0 1-.858-.21 1.46 1.46 0 0 1-.582-.574 1.8 1.8 0 0 1-.202-.857V7.881q0-.484.202-.856a1.44 1.44 0 0 1 .582-.582q.372-.21.857-.21.493 0 .865.21.373.202.574.582.21.372.21.857v12.48q0 .484-.21.856-.202.372-.574.574-.372.21-.865.21m-9.748 1.48q-.704 0-1.124-.373-.413-.372-.72-1.034l-1.357-2.967q.194 0 .372.008.177.009.282.009 1.536.04 2.32.097.792.056 1.253.137l.453 2.174q.128.623-.04 1.059a1.28 1.28 0 0 1-.558.663q-.38.225-.881.226"/></svg>
  );
}
