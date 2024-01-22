import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { ButtonTypography } from './components/ButtonTypography/ButtonTypography';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

export const Button = ({
  type,
  size = 'm',
  before,
  after,
  stretched,
  children,
  className,
  mode = 'filled',
  ...restProps
}: ButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      type={type || 'button'}
      Component="button"
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
      {before && (
        <div className={styles.before}>
          {before}
        </div>
      )}
      <ButtonTypography size={size}>{children}</ButtonTypography>
      {after}
    </Tappable>
  );
};
