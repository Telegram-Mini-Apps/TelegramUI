import type { AnchorHTMLAttributes } from 'react';
import styles from './Link.module.css';

import { classNames } from 'helpers/classNames';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ className, children, ...restProps }: LinkProps) => (
  <a
    className={classNames(styles.wrapper, className)}
    {...restProps}
  >
    {children}
  </a>
);
