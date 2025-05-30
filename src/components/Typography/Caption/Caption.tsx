import styles from './Caption.module.css';

import { classNames } from 'helpers/classNames';

import type { TypographyProps } from '../Typography';
import { Typography } from '../Typography';

type CaptionLevel = '1' | '2';

export interface CaptionProps extends Omit<TypographyProps, 'plain'> {
  /** The size level of the caption, influencing its styling and typography size. */
  level?: CaptionLevel;
}

const captionLevelStyles: Record<CaptionLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
};

/**
 * The Caption component is a text wrapper that applies specific typographic styles,
 * based on the provided `level` prop. It's built on top of the Typography component,
 * ensuring consistent text styling across the application. It primarily serves for text
 * that acts as a small, descriptive label or annotation.
 */
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

