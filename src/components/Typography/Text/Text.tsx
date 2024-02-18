import { forwardRef } from 'react';
import styles from './Text.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

export type TextProps = Omit<TypographyProps, 'plain'>

export const Text = forwardRef(({
  weight,
  className,
  Component,
  ...restProps
}: TextProps, ref) => (
  <Typography
    ref={ref}
    {...restProps}
    weight={weight}
    className={classNames(styles.wrapper, className)}
    Component={Component || 'span'}
  />
));

