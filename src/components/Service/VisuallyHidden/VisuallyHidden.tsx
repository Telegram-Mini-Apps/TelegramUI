import { AllHTMLAttributes, ElementType } from 'react';
import styles from './VisuallyHidden.module.css';

import { classNames } from 'helpers/classNames';

export interface VisuallyHiddenProps<T> extends AllHTMLAttributes<T> {
  Component?: ElementType;
}

export const VisuallyHidden = <T,>({
  Component = 'span',
  className,
  ...restProps
}: VisuallyHiddenProps<T>) => (
  <Component {...restProps} className={classNames(styles.wrapper, className)} />
);
