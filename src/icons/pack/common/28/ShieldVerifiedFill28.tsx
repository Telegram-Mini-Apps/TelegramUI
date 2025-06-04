/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface ShieldVerifiedFill28Props extends SvgAttributes {
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

export function ShieldVerifiedFill28({ size = 28, color = 'currentColor', ...props }: ShieldVerifiedFill28Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={size} height={size} {...props}><path fill={color} fill-rule="evenodd" d="M13.583 25.94q.216.06.372.06.168 0 .384-.06.216-.048.456-.168 2.578-1.33 4.33-2.423 1.75-1.08 2.806-2.147 1.055-1.067 1.523-2.29.468-1.236.468-2.843V7.145q0-1.055-.42-1.547-.407-.492-1.295-.851a59 59 0 0 0-2.663-.996q-.852-.312-1.715-.624a87 87 0 0 0-1.547-.551l-1.08-.372a7 7 0 0 0-.623-.144 3.2 3.2 0 0 0-1.235 0 8 8 0 0 0-.612.144l-1.092.372q-.696.24-1.559.551-.852.3-1.715.612a81 81 0 0 0-1.56.588q-.695.264-1.09.42-.877.36-1.296.851Q4 6.09 4 7.145v8.924q0 1.607.48 2.819t1.547 2.254q1.067 1.032 2.819 2.123a91 91 0 0 0 4.281 2.507q.24.12.456.168m-.28-18.594a1.02 1.02 0 0 1 1.328 0l1.173 1c.164.14.368.224.582.24l1.536.123c.501.04.9.438.94.94l.122 1.535c.017.215.101.419.241.583l1 1.173c.326.382.326.945 0 1.327l-1 1.173c-.14.164-.224.368-.241.583l-.123 1.536c-.04.5-.438.899-.939.939l-1.536.122a1.02 1.02 0 0 0-.582.241l-1.173 1a1.02 1.02 0 0 1-1.328 0l-1.173-1a1.02 1.02 0 0 0-.582-.24l-1.536-.123a1.024 1.024 0 0 1-.94-.94l-.122-1.535a1.02 1.02 0 0 0-.24-.583l-1-1.173a1.02 1.02 0 0 1 0-1.327l1-1.173c.139-.164.223-.368.24-.583l.123-1.536c.04-.5.438-.899.939-.939l1.536-.122c.215-.017.418-.102.582-.241zm3.846 4.44a.64.64 0 0 1 0 .905l-3.412 3.412a.64.64 0 0 1-.905 0l-1.705-1.706a.64.64 0 0 1 .904-.905l1.254 1.254 2.959-2.96a.64.64 0 0 1 .905 0" clip-rule="evenodd"/></svg>
  );
}
