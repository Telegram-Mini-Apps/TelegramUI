import { AllHTMLAttributes, ElementType, forwardRef, ReactNode } from 'react';
import styles from './Button.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Spinner } from 'components';
import { Tappable } from 'components/Service/Tappable/Tappable';
import { ButtonTypography } from './components/ButtonTypography/ButtonTypography';

export interface ButtonProps extends Omit<AllHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** Inserts a component before the button text, e.g. Icon */
  before?: ReactNode;
  /** Inserts a component after the button text, e.g. Badge */
  after?: ReactNode;
  /** Button size */
  size?: 's' | 'm' | 'l';
  /** Stretches the width of the button to fill the available horizontal space */
  stretched?: boolean;
  /** Button mode, only background and color are changing */
  mode?: 'filled' | 'bezeled' | 'plain' | 'gray' | 'outline' | 'white';
  /** Is button loading */
  loading?: boolean;
  /** Is button disabled */
  disabled?: boolean;
  /** HTML Tag, button by default */
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
      <ButtonTypography size={size}>{children}</ButtonTypography>
      {hasReactNode(after) && (
        <div className={styles.after}>
          {after}
        </div>
      )}
    </Tappable>
  );
});
