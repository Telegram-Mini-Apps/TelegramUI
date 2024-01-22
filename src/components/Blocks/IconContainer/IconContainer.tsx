import { HTMLAttributes } from 'react';
import styles from './IconContainer.module.css';

import { classNames } from 'helpers/classNames';

export interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const IconContainer = ({ className, children, ...restProps }: IconContainerProps) => (
  <div className={classNames(styles.wrapper, className)} {...restProps}>
    {children}
  </div>
);
