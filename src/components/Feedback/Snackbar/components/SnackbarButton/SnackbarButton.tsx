import type { ButtonHTMLAttributes } from 'react';
import styles from './SnackbarButton.module.css';

import { classNames } from 'helpers/classNames';

import { Tappable } from 'components/Service/Tappable/Tappable';

export type SnackbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SnackbarButton = ({
  className,
  children,
  ...restProps
}: SnackbarButtonProps) => (
  <Tappable
    Component="button"
    className={classNames(styles.wrapper, className)}
    {...restProps}
  >
    {children}
  </Tappable>
);
