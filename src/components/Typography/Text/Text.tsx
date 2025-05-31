import { forwardRef } from 'react';
import styles from './Text.module.css';

import { classNames } from 'helpers/classNames';

import type { TypographyProps } from '../Typography';
import { Typography } from '../Typography';

export type TextProps = Omit<TypographyProps, 'plain'>;

/**
 * Text component is designed for general-purpose text rendering,
 * offering a wide range of typographic options. It extends the Typography
 * component, inheriting its flexibility and styling capabilities.
 * This component is ideal for paragraphs, labels, or any textual content, providing
 * consistent styling across the application.
 */
export const Text = forwardRef(
  ({ weight, className, Component, ...restProps }: TextProps, ref) => (
    <Typography
      ref={ref}
      {...restProps}
      weight={weight}
      className={classNames(styles.wrapper, className)}
      Component={Component || 'span'}
    />
  )
);
