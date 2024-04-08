import { HTMLAttributes, ReactElement } from 'react';
import styles from './CompactPagination.module.css';

import { classNames } from 'helpers/classNames';

import {
  CompactPaginationItem,
  CompactPaginationItemProps,
} from './components/CompactPaginationItem/CompactPaginationItem';

export interface CompactPaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Sets the color theme of the pagination. */
  mode?: 'default' | 'ambient' | 'white';
  /** Contains pagination items. */
  children?: ReactElement<CompactPaginationItemProps>[];
}

const modeStyles = {
  default: undefined,
  ambient: styles['wrapper--ambient'],
  white: styles['wrapper--white'],
};

/**
 * Displays a compact set of pagination controls. This component allows users to navigate
 * between pages of content. It supports several themes for customization and can fit within various UI designs.
 */
export const CompactPagination = ({
  mode = 'default',
  children,
  className,
  ...restProps
}: CompactPaginationProps) => (
  <div
    role="tablist"
    className={classNames(
      styles.wrapper,
      modeStyles[mode],
      className,
    )}
    {...restProps}
  >
    {children}
  </div>
);

CompactPagination.Item = CompactPaginationItem;
