import { HTMLAttributes } from 'react';
import styles from './Steps.module.css';

import { classNames } from 'helpers/classNames';

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  /** Steps count */
  count: number;
  /** Steps count progress, from 0 to {count} */
  progress: number;
}

export const Steps = ({ className, count, progress }: StepsProps) => (
  <div className={classNames(styles.wrapper, className)}>
    {Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={classNames(styles.step, {
          [styles['step--active']]: i < progress,
        })}
      />
    ))}
  </div>
);
