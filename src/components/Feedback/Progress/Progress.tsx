'use client';

import { HTMLAttributes } from 'react';
import styles from './Progress.module.css';

import { classNames } from 'helpers/classNames';
import { clamp } from 'helpers/math';
import { usePlatform } from 'hooks/usePlatform';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** The current value of the progress bar, expressed as a percentage. The value should be between 0 and 100. */
  value?: number;
}

const PROGRESS_MIN_VALUE = 0;
const PROGRESS_MAX_VALUE = 100;

/**
 * Renders a linear progress bar that visually represents completion percentage towards a goal.
 * The component respects accessibility standards by including appropriate ARIA attributes.
 */
export const Progress = ({ value = 0, className, ...restProps }: ProgressProps) => {
  const platform = usePlatform();

  const progress = clamp(value, PROGRESS_MIN_VALUE, PROGRESS_MAX_VALUE);
  const title = `${progress} / ${PROGRESS_MAX_VALUE}`;

  return (
    <div
      title={title}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={PROGRESS_MIN_VALUE}
      aria-valuemax={PROGRESS_MAX_VALUE}
      className={classNames(
        styles.wrapper,
        platform === 'base' && styles['wrapper--base'],
        className,
      )}
      {...restProps}
    >
      <div aria-hidden className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
};
