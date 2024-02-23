import { AllHTMLAttributes, ElementType } from 'react';
import styles from './HorizontalScroll.module.css';

import { classNames } from 'helpers/classNames';

export interface HorizontalScrollProps extends AllHTMLAttributes<HTMLElement> {
  Component?: ElementType;
}

export const HorizontalScroll = ({
  Component = 'div',
  className,
  children,
  ...restProps
}: HorizontalScrollProps) => (
  <Component className={classNames(styles.wrapper, className)} {...restProps}>
    {children}
  </Component>
);
