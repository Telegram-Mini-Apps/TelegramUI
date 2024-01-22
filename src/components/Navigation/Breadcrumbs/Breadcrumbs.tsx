import { Children, HTMLAttributes, ReactNode } from 'react';
import styles from './Breadcrumbs.module.css';

import { classNames } from 'helpers/classNames';

import { Icon16Chevron } from 'icons/16/chevron';

import { BreadCrumbsItem } from './components/BreadCrumbsItem/BreadCrumbsItem';
import { IconDot } from './icons/dot';
import { IconSlash } from './icons/slash';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  /** Sets dividers type */
  divider?: 'dot' | 'slash' | 'chevron';
  /** Pass Breadcrumbs.Item components here */
  children?: ReactNode;
}

export const Breadcrumbs = ({
  divider = 'dot',
  className,
  children,
}: BreadcrumbsProps) => (
  <div className={classNames(styles.wrapper, className)}>
    {Children.map(children, (child, index) => (
      <>
        {child}
        {index !== Children.count(children) - 1 && (
          <div className={styles.divider}>
            {divider === 'dot' && <IconDot />}
            {divider === 'slash' && <IconSlash />}
            {divider === 'chevron' && <Icon16Chevron className={styles.chevron} />}
          </div>
        )}
      </>
    ))}
  </div>
);

Breadcrumbs.Item = BreadCrumbsItem;
