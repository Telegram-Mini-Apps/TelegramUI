'use client';

import { AllHTMLAttributes, ElementType, forwardRef, ReactNode } from 'react';
import styles from './Button.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Spinner } from 'components/Feedback/Spinner/Spinner';
import { Tappable } from 'components/Service/Tappable/Tappable';
import { ButtonTypography } from './components/ButtonTypography/ButtonTypography';

export interface ButtonProps extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Inserts a component before the button text, typically an icon. */
  before?: ReactNode;
  /** Inserts a component after the button text, such as a badge or indicator. */
  after?: ReactNode;
  /** Controls the size of the button, influencing padding and font size. */
  size?: 's' | 'm' | 'l';
  /** If true, stretches the button to fill the width with its container. */
  stretched?: boolean;
  /** Defines the button's visual style, affecting its background and text color. */
  mode?: 'filled' | 'bezeled' | 'plain' | 'gray' | 'outline' | 'white';
  /** Displays a loading indicator in place of the button content when true. */
  loading?: boolean;
  /** Disables the button, preventing user interactions, when true. */
  disabled?: boolean;
  /** Specifies the root element type for the button, allowing for semantic customization or integration with routing libraries. */
  Component?: ElementType;
}

const modeStyles = {
  filled: styles['wrapper--filled'],
  bezeled: styles['wrapper--bezeled'],
  plain: styles['wrapper--plain'],
  gray: styles['wrapper--gray'],
  outline: styles['wrapper--outline'],
  white: styles['wrapper--white'],
};

const sizeStyles = {
  s: styles['wrapper--s'],
  m: styles['wrapper--m'],
  l: styles['wrapper--l'],
};

/**
 * Renders a button or a button-like element with customizable properties, such as size, mode, and loading state. Supports adding icons or other elements before and after the text.
 */
export const Button = forwardRef(({
  type,
  size = 'm',
  before,
  after,
  stretched,
  children,
  className,
  mode = 'filled',
  loading,
  Component = 'button',
  ...restProps
}: ButtonProps, ref) => {
  const platform = usePlatform();

  return (
    <Tappable
      ref={ref}
      type={type || 'button'}
      Component={Component}
      className={classNames(
        styles.wrapper,
        mode && modeStyles[mode],
        size && sizeStyles[size],
        platform === 'ios' && styles['wrapper--ios'],
        stretched && styles['wrapper--stretched'],
        loading && styles['wrapper--loading'],
        className,
      )}
      {...restProps}
    >
      {loading && <Spinner className={styles.spinner} size="s" />}
      {hasReactNode(before) && (
        <div className={styles.before}>
          {before}
        </div>
      )}
      <ButtonTypography className={styles.content} size={size}>{children}</ButtonTypography>
      {hasReactNode(after) && (
        <div className={styles.after}>
          {after}
        </div>
      )}
    </Tappable>
  );
});
