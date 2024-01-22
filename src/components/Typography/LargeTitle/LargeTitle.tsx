import styles from './LargeTitle.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

export type LargeTitleProps = TypographyProps;

export const LargeTitle = ({ className, Component, ...restProps }: LargeTitleProps) => (
  <Typography
    {...restProps}
    Component={Component || 'h1'}
    className={classNames(styles.wrapper, className)}
  />
);

