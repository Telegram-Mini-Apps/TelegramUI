import { Children, HTMLAttributes, ReactNode } from 'react';
import styles from './Breadcrumbs.module.css';

import { classNames } from 'helpers/classNames';

import { Icon16Chevron } from 'icons/16/chevron';

import { BreadCrumbsItem } from './components/BreadCrumbsItem/BreadCrumbsItem';
import { IconDot } from './icons/dot';
import { IconSlash } from './icons/slash';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  /** Type of divider to use between breadcrumb items. */
  divider?: 'dot' | 'slash' | 'chevron';
  /** Children elements, expected to be breadcrumb items. */
  children?: ReactNode;
}

/**
 * The Breadcrumbs component displays a navigation trail for users to follow back to the starting or entry point.
 * It supports customizable dividers to fit different design needs.
 */
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
