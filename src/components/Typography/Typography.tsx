import { AllHTMLAttributes, ElementType, forwardRef } from 'react';
import styles from './Typography.module.css';

import { classNames } from 'helpers/classNames';

const stylesWeight = {
  '1': styles['wrapper--weight-1'],
  '2': styles['wrapper--weight-2'],
  '3': styles['wrapper--weight-3'],
};

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  /** Sets the font width */
  weight?: '1' | '2' | '3';
  /** Makes text uppercase */
  caps?: boolean;
  /** HTML tag */
  Component?: ElementType;
  /** Removes default margins */
  plain?: boolean;
}

export const Typography = forwardRef(({
  weight = '3',
  Component = 'span',
  plain = true,
  caps,
  className,
  ...restProps
}: TypographyProps, ref) => (
  <Component
    ref={ref}
    className={classNames(
      styles.wrapper,
      plain && styles['wrapper--plain'],
      weight && stylesWeight[weight],
      caps && styles['wrapper--caps'],
      className,
    )}
    {...restProps}
  />
));
