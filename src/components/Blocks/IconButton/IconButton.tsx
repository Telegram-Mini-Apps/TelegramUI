import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './IconButton.module.css';

import { classNames } from 'helpers/classNames';

import { Tappable } from 'components/Service/Tappable/Tappable';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Specifies the button size, affecting icon scaling. Recommended icon sizes are 20px for 's', 24px for 'm', and 28px for 'l'. */
  size?: 's' | 'm' | 'l';
  /** Defines the button's visual style, affecting its color and background. */
  mode?: 'bezeled' | 'plain' | 'gray' | 'outline';
}

const modeStyles = {
  bezeled: styles['wrapper--bezeled'],
  plain: styles['wrapper--plain'],
  gray: styles['wrapper--gray'],
  outline: styles['wrapper--outline'],
};

const sizeStyles = {
  s: styles['wrapper--s'],
  m: styles['wrapper--m'],
  l: styles['wrapper--l'],
};

/**
 * Renders an icon button with customizable size and mode. It utilizes the `Tappable` component for enhanced
 * touch interaction, allowing it to serve various UI actions efficiently.
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  size = 'm',
  mode = 'bezeled',
  className,
  children,
  ...restProps
}, ref) => (
  <Tappable
    ref={ref}
    Component="button"
    className={classNames(
      styles.wrapper,
      modeStyles[mode],
      sizeStyles[size],
      className,
    )}
    {...restProps}
  >
    {children}
  </Tappable>
));
