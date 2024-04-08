'use client';

import { InputHTMLAttributes } from 'react';
import styles from './Multiselectable.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';
import { IconMultiselectable } from './icons/multiselectable';
import { IconMultiselectableChecked } from './icons/multiselectable_checked';
import { IconMultiselectableIOS } from './icons/multiselectable_ios';
import { IconMultiselectableIOSChecked } from './icons/multiselectable_ios_checked';

export interface MultiselectableProps
  extends InputHTMLAttributes<HTMLInputElement> {
}

/**
 * Renders a custom multiselectable checkbox input, adapting its icons based on the current platform (iOS or others).
 * Supports all standard input checkbox properties.
 */
export const Multiselectable = ({
  style,
  className,
  disabled,
  ...restProps
}: MultiselectableProps) => {
  const platform = usePlatform();

  const UnCheckedIcon = platform === 'ios' ? IconMultiselectableIOS : IconMultiselectable;
  const CheckedIcon = platform === 'ios' ? IconMultiselectableIOSChecked : IconMultiselectableChecked;

  return (
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
      <UnCheckedIcon className={styles.icon} aria-hidden />
      <CheckedIcon className={styles.checkedIcon} aria-hidden />
    </label>
  );
};
