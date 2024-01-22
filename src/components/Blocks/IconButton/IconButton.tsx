import { ButtonHTMLAttributes } from 'react';
import styles from './IconButton.module.css';

import { classNames } from 'helpers/classNames';

import { Tappable } from 'components/Service/Tappable/Tappable';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button size, you should pass different icons for each size. Recommended 20 for s, 24 for m, 28 for l  */
  size?: 's' | 'm' | 'l';
  /** Button mode, only color and background will be changed */
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

export const IconButton = ({
  size = 'm',
  mode = 'bezeled',
  className,
  children,
  ...restProps
}: IconButtonProps) => (
  <Tappable
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
);
