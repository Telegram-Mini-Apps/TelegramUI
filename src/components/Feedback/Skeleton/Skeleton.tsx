import { HTMLAttributes } from 'react';
import styles from './Skeleton.module.css';

import { classNames } from 'helpers/classNames';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** If true, disables the shimmering animation of the skeleton. */
  withoutAnimation?: boolean;
  /** If true, the skeleton overlay is shown above the content. When false, the skeleton is hidden, showing any underlying content. */
  visible?: boolean;
}

/**
 * Used as a placeholder during the loading state of a component or page. It can visually mimic
 * the layout that will be replaced by the actual content once loaded, improving user experience by reducing perceived loading times.
 */
export const Skeleton = ({
  withoutAnimation,
  visible,
  className,
  children,
  ...restProps
}: SkeletonProps) => (
  <div
    className={classNames(
      styles.wrapper,
      visible && styles['wrapper--visible'],
      withoutAnimation && styles['wrapper--noAnimation'],
      className,
    )}
    {...restProps}
  >
    {children}
  </div>
);
