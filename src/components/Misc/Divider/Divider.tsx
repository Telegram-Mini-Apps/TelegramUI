import { HTMLAttributes } from 'react';
import styles from './Divider.module.css';

import { classNames } from 'helpers/classNames';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {}

/**
 * Represents a horizontal line used to separate content within a layout or component.
 * The component allows for customization through additional HTML attributes and custom CSS classes.
 */
export const Divider = ({ className, ...restProps }: DividerProps) => (
  <hr className={classNames(styles.wrapper, className)} {...restProps} />
);
