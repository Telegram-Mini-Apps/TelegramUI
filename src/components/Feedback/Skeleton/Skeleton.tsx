import { HTMLAttributes } from 'react';
import styles from './Skeleton.module.css';

import { classNames } from 'helpers/classNames';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Disabling animation for the skeleton */
  withoutAnimation?: boolean;
  /** Shows the content under the skeleton */
  visible?: boolean;
}

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
