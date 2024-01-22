import { InputHTMLAttributes } from 'react';
import styles from './Switch.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface SwitchProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const platformStyles = {
  base: styles['wrapper--base'],
  ios: styles['wrapper--ios'],
};

export const Switch = ({
  style,
  className,
  disabled,
  children,
  ...restProps
}: SwitchProps) => {
  const platform = usePlatform();

  return (
    <label
      className={classNames(
        styles.wrapper,
        platformStyles[platform],
        disabled && styles['wrapper--disabled'],
        className,
      )}
    >
      <VisuallyHidden
        {...restProps}
        Component="input"
        type="checkbox"
        className={styles.input}
        disabled={disabled}
      />
      <div aria-hidden className={styles.control} />
      {children}
    </label>
  );
};
