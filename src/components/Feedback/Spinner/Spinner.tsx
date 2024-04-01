import { HTMLAttributes } from 'react';
import styles from './Spinner.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { BaseSpinner } from './components/BaseSpinner/BaseSpinner';
import { IOSSpinner } from './components/IOSSpinner/IOSSpinner';

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
