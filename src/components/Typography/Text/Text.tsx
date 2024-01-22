import styles from './Text.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

export type TextProps = Omit<TypographyProps, 'plain'>

export const Text = ({
  weight,
  className,
  Component,
  ...restProps
}: TextProps) => (
  <Typography
    {...restProps}
    weight={weight}
    className={classNames(styles.wrapper, className)}
    Component={Component || 'span'}
  />
);

