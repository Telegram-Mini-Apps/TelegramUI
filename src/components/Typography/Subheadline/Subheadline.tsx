import { forwardRef } from 'react';
import styles from './Subheadline.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

type SubheadlineLevel = '1' | '2';

export interface SubheadlineProps extends TypographyProps {
  /** Size of the subheadline */
  level?: SubheadlineLevel;
}

const subheadlineLevelStyles: Record<SubheadlineLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
};

export const Subheadline = forwardRef(({
  level = '1',
  className,
  Component,
  ...restProps
}: SubheadlineProps, ref) => (
  <Typography
    {...restProps}
    ref={ref}
    className={classNames(styles.wrapper, subheadlineLevelStyles[level], className)}
    Component={Component || 'h6'}
  />
));

