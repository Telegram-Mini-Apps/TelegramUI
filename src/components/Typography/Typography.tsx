import { AllHTMLAttributes, ElementType, forwardRef } from 'react';
import styles from './Typography.module.css';

import { classNames } from 'helpers/classNames';

const stylesWeight = {
  '1': styles['wrapper--weight-1'],
  '2': styles['wrapper--weight-2'],
  '3': styles['wrapper--weight-3'],
};

export interface TypographyProps extends AllHTMLAttributes<HTMLElement> {
  /** Controls the font weight of the text, with options ranging from light to bold. */
  weight?: '1' | '2' | '3';
  /** If true, transforms the text to uppercase for stylistic emphasis. */
  caps?: boolean;
  /** Specifies the HTML tag or React component used to render the text, defaulting to `span`. */
  Component?: ElementType;
  /** When true, removes the default margins around the text, useful for inline styling or custom layouts. */
  plain?: boolean;
}

/**
 * The Typography component is a versatile wrapper for text content, offering
 * customizable styling options such as weight, capitalization, and HTML tag. It's designed
 * to facilitate consistent text styling across your application, with support for customization
 * through props. The component is highly reusable and adaptable to various design needs.
 */
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
