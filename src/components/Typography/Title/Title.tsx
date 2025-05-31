import type { ElementType } from 'react';
import styles from './Title.module.css';

import { classNames } from 'helpers/classNames';

import type { TypographyProps } from '../Typography';
import { Typography } from '../Typography';

type TitleLevel = '1' | '2' | '3';

export interface TitleProps extends TypographyProps {
  /** Determines the size and semantic tag of the title, with options for `h2`, `h3`, or `h4`. */
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

/**
 * The Title component is designed to render text as a page or section heading,
 * providing clear hierarchy and structure within content. It supports three levels of emphasis,
 * allowing for flexibility in design while maintaining semantic integrity. By default, it uses `h3`
 * for its semantic HTML element but can be customized via the `level` prop or explicitly with the `Component` prop.
 */
export const Title = ({
  level = '2',
  className,
  Component,
  ...restProps
}: TitleProps) => (
  <Typography
    {...restProps}
    className={classNames(titleLevelStyles[level], className)}
    Component={Component || titleLevelTags[level]}
  />
);
