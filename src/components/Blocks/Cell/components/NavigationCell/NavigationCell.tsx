import type { ReactNode } from 'react';
import styles from './NavigationCell.module.css';

import { classNames } from 'helpers/classNames';

import { IconContainer } from 'components/Blocks/IconContainer/IconContainer';
import type { CellProps } from '../../Cell';
import { Cell } from '../../Cell';
import { Navigation } from '../Navigation/Navigation';

export interface NavigationCellProps extends CellProps {
  /** Background color for the icon container. */
  color?: string;
  /** Optional Navigation cell icon. */
  icon?: ReactNode;
}

export function NavigationCell({
  after,
  icon,
  color,
  className,
  Component,
  ...props
}: NavigationCellProps) {
  return (
    <Cell
      Component={Component || 'button'}
      before={icon && <IconContainer color={color}>{icon}</IconContainer>}
      after={<Navigation>{after}</Navigation>}
      className={classNames(styles.wrapper, className)}
      {...props}
    />
  );
}
