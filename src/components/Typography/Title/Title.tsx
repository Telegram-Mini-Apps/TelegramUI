import { ElementType } from 'react';
import styles from './Title.module.css';

import { classNames } from 'helpers/classNames';

import { Typography, TypographyProps } from '../Typography';

type TitleLevel = '1' | '2' | '3';

export interface TitleProps extends TypographyProps {
  /** Size of the title */
  level?: TitleLevel;
}

const titleLevelTags: Record<TitleLevel, ElementType> = {
  '1': 'h2',
  '2': 'h3',
  '3': 'h4',
};

const titleLevelStyles: Record<TitleLevel, string> = {
  '1': styles['wrapper--1'],
  '2': styles['wrapper--2'],
  '3': styles['wrapper--3'],
};

export const Title = ({
  level = '2',
  className,
  Component,
  ...restProps
}: TitleProps) => (
  <Typography
    {...restProps}
    className={classNames(styles.wrapper, titleLevelStyles[level], className)}
    Component={Component || titleLevelTags[level]}
  />
);

