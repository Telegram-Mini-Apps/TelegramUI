'use client';

import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react';
import styles from './FormInput.module.css';

import { classNames } from 'helpers/classNames';
import { callMultiple } from 'helpers/function';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { FormInputTitle } from './components/FormInputTitle';

export interface FormPublicProps {
  /** Defines the visual state of the form input (e.g., error, focused). */
  status?: 'default' | 'error' | 'focused';
  /** Optional header content, displayed above the form input on `base` platform. */
  header?: ReactNode;
  /** Content to be displayed before the form input, such as icons or labels. */
  before?: ReactNode;
  /** Content to be displayed after the form input, often used for action icons or additional information. */
  after?: ReactNode;
  /** Indicates if the form input is disabled. */
  disabled?: boolean;
}

export interface FormInputProps extends FormPublicProps, HTMLAttributes<HTMLLabelElement> {}

const platformStyles = {
  base: styles['wrapper--base'],
  ios: styles['wrapper--ios'],
};

const formStatusStyles = {
  default: styles['wrapper--default'],
  error: styles['wrapper--error'],
  focused: styles['wrapper--focused'],
};

/**
 * Wraps an input element with additional layout for headers, icons, or actions, providing a consistent look and feel across the form.
 * It supports conditional rendering based on the platform and the state of the form element.
 */
export const FormInput = forwardRef<HTMLDivElement, FormInputProps>(({
  status,
  header,
  before,
  after,
  disabled,
  children,
  className,
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...restProps
}, ref) => {
  const platform = usePlatform();
  const [isFocused, setIsFocused] = useState(false);

  const formStatus = status || (isFocused ? 'focused' : 'default');

  const onFocus = callMultiple(onFocusProp, () => {
    if (disabled) {
      return;
    }

    setIsFocused(true);
  });
  const onBlur = callMultiple(onBlurProp, () => setIsFocused(false));

  return (
    <div
      ref={ref}
      className={classNames(
        styles.wrapper,
        platformStyles[platform],
        formStatusStyles[formStatus],
        disabled && styles['wrapper--disabled'],
      )}
      aria-disabled={disabled}
    >
      <label
        aria-disabled={disabled}
        className={classNames(styles.body, className)}
        onFocus={onFocus}
        onBlur={onBlur}
        {...restProps}
      >
        {hasReactNode(before) && (
          <div className={styles.before}>
            {before}
          </div>
        )}
        {children}
        {hasReactNode(after) && (
          <div className={styles.after}>
            {after}
          </div>
        )}
      </label>
      {hasReactNode(header) && platform === 'base' && (
        <FormInputTitle className={styles.title}>{header}</FormInputTitle>
      )}
    </div>
  );
});
