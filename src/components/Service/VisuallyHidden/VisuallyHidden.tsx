import type { AllHTMLAttributes, ElementType } from 'react';
import styles from './VisuallyHidden.module.css';

import { classNames } from 'helpers/classNames';
import type { RefProps } from 'types/ref';

export interface VisuallyHiddenProps<T> extends AllHTMLAttributes<T> {
  Component?: ElementType;
}

export const VisuallyHidden = ({
  ref,
  Component = 'span',
  className,
  ...restProps
}: VisuallyHiddenProps<HTMLSpanElement> & RefProps<HTMLSpanElement>) => (
  <Component
    {...restProps}
    ref={ref}
    className={classNames(styles.wrapper, className)}
  />
);
