import { HTMLAttributes, ReactElement } from 'react';
import styles from './CompactPagination.module.css';

import { classNames } from 'helpers/classNames';

import {
  CompactPaginationItem,
  CompactPaginationItemProps,
} from './components/CompactPaginationItem/CompactPaginationItem';

export interface CompactPaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** pagination mode, only colors are changing */
  mode?: 'default' | 'ambient' | 'white';
  /** Pass CompactPagination.Item components here */
  children?: ReactElement<CompactPaginationItemProps>[];
}

const modeStyles = {
  default: undefined,
  ambient: styles['wrapper--ambient'],
  white: styles['wrapper--white'],
};

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
