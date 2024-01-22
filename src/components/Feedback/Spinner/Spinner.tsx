import { HTMLAttributes } from 'react';
import styles from './Spinner.module.css';

import { classNames } from 'helpers/classNames';

import { BaseSpinner } from './components/BaseSpinner/BaseSpinner';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner, m by default */
  size: 's' | 'm' | 'l';
}

const sizeStyles = {
  s: styles['wrapper--s'],
  m: styles['wrapper--m'],
  l: styles['wrapper--l'],
};

export const Spinner = ({
  size = 'm',
  className,
}: SpinnerProps) => (
  <div
    role="status"
    className={classNames(
      styles.wrapper,
      sizeStyles[size],
      className,
    )}
  >
    <BaseSpinner size={size} />
  </div>
);
