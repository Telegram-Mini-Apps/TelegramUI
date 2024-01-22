import { InputHTMLAttributes } from 'react';
import styles from './Selectable.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';
import { IconSelectableBase } from './icons/selectable_base';
import { IconSelectableIOS } from './icons/selectable_ios';

export interface SelectableProps
  extends InputHTMLAttributes<HTMLInputElement> {
}

export const Selectable = ({
  style,
  className,
  disabled,
  ...restProps
}: SelectableProps) => {
  const platform = usePlatform();

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
        type="radio"
        className={styles.input}
        disabled={disabled}
      />
      {platform === 'ios' && <IconSelectableIOS className={styles.icon} aria-hidden />}
      {platform === 'base' && <IconSelectableBase className={styles.icon} aria-hidden />}
    </label>
  );
};
