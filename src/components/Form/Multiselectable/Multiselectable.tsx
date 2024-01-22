import { InputHTMLAttributes } from 'react';
import styles from './Multiselectable.module.css';

import { classNames } from 'helpers/classNames';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';
import { IconMultiselectable } from './icons/multiselectable';
import { IconMultiselectableChecked } from './icons/multiselectable_checked';

export interface MultiselectableProps
  extends InputHTMLAttributes<HTMLInputElement> {
}

export const Multiselectable = ({
  style,
  className,
  disabled,
  ...restProps
}: MultiselectableProps) => (
  <label
    className={classNames(
      styles.wrapper,
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
    <IconMultiselectable className={styles.icon} aria-hidden />
    {/* TODO, different icons for platforms */}
    <IconMultiselectableChecked className={styles.checkedIcon} aria-hidden />
  </label>
);
