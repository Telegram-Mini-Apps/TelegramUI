import styles from './Caption.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

type CaptionLevel = '1' | '2';

export interface CaptionProps extends Omit<TypographyProps, 'plain'> {
  /** Size of the subheadline */
  level?: CaptionLevel;
}

const captionLevelStyles: Record<CaptionLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
};

export const Caption = ({
  level = '1',
  className,
  Component,
  ...restProps
}: CaptionProps) => (
  <Typography
    {...restProps}
    className={classNames(styles.wrapper, captionLevelStyles[level], className)}
    Component={Component || 'span'}
  />
);

