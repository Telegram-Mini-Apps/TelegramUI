import styles from './Headline.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

export type HeadlineProps = TypographyProps;

export const Headline = ({ className, Component, ...restProps }: HeadlineProps) => (
  <Typography
    {...restProps}
    className={classNames(styles.wrapper, className)}
    Component={Component || 'h5'}
  />
);

