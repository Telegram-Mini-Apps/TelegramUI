import type { ReactNode } from 'react';

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
  ...props
}: NavigationCellProps) {
  return (
    <Cell
      before={icon && <IconContainer color={color}>{icon}</IconContainer>}
      after={<Navigation>{after}</Navigation>}
      {...props}
    />
  );
}
