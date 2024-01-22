import { HTMLAttributes } from 'react';
import styles from './Divider.module.css';

import { classNames } from 'helpers/classNames';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

export const Divider = ({ className, ...restProps }: DividerProps) => (
  <hr className={classNames(styles.wrapper, className)} {...restProps} />
);
