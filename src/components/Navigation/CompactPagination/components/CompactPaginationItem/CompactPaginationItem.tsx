import { ButtonHTMLAttributes } from 'react';
import styles from './CompactPaginationItem.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface CompactPaginationItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const CompactPaginationItem = ({
  selected,
  className,
  children,
  ...restProps
}: CompactPaginationItemProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={selected}
    className={classNames(
      styles.wrapper,
      selected && styles['wrapper--selected'],
      className,
    )}
    {...restProps}
  >
    {hasReactNode(children) ? <VisuallyHidden>{children}</VisuallyHidden> : undefined}
  </button>
);
