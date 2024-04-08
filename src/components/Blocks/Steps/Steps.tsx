import { HTMLAttributes } from 'react';
import styles from './Steps.module.css';

import { classNames } from 'helpers/classNames';

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  /** Total number of steps. */
  count: number;
  /** Current progress, indicating how many steps have been completed. Progress is 0-indexed and goes up to `count`. */
  progress: number;
}

/**
 * Renders a visual indicator of steps or progress in a process, such as a tutorial or a multi-step form.
 * It visually represents total steps and current progress.
 */
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
