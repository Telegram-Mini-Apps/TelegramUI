'use client';

import { HTMLAttributes } from 'react';
import styles from './Spinner.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { BaseSpinner } from './components/BaseSpinner/BaseSpinner';
import { IOSSpinner } from './components/IOSSpinner/IOSSpinner';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines the size of the spinner. Can be 'small' (s), 'medium' (m), or 'large' (l), with 'medium' being the default size. */
  size: 's' | 'm' | 'l';
}

const sizeStyles = {
  s: styles['wrapper--s'],
  m: styles['wrapper--m'],
  l: styles['wrapper--l'],
};

/**
 * Provides a visual indicator for loading states across different platforms. It automatically selects
 * an appropriate spinner style based on the current platform, allowing for a consistent user experience.
 */
export const Spinner = ({
  size = 'm',
  className,
}: SpinnerProps) => {
  const platform = usePlatform();

  const Component = platform === 'ios' ? IOSSpinner : BaseSpinner;
  return (
    <div
      role="status"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        sizeStyles[size],
        className,
      )}
    >
      <Component size={size} />
    </div>
  );
};
