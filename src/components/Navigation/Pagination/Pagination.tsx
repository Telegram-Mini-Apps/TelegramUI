import { HTMLAttributes } from 'react';
import styles from './Pagination.module.css';

import { classNames } from 'helpers/classNames';

import { Icon24ChevronLeft } from 'icons/24/chevron_left';
import { Icon24ChevronRight } from 'icons/24/chevron_right';

import { Headline } from 'components/Typography/Headline/Headline';
import { PaginationType } from './hooks/enum';
import { UsePaginationItem, UsePaginationProps } from './hooks/types';
import { usePagination } from './hooks/usePagination';

export interface PaginationProps extends UsePaginationProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controls whether the Pagination component is interactive. */
  disabled?: boolean;
}

/**
 * The Pagination component displays a set of navigation controls allowing users to navigate through pages of content.
 * It is built on top of a custom hook that manages pagination logic and state.
 * This component can be customized to hide next/previous buttons, specify boundary and sibling count for pagination items, and handle page changes through an `onChange` callback.
 */
export const Pagination = ({
  boundaryCount,
  count,
  defaultPage,
  hideNextButton,
  hidePrevButton,
  onChange,
  page,
  disabled,
  siblingCount,
  className,
  ...restProps
}: PaginationProps) => {
  const paginationItems = usePagination({
    boundaryCount,
    count,
    defaultPage,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    siblingCount,
  });

  const getPaginationChild = (item: UsePaginationItem) => {
    switch (item.type) {
      case PaginationType.Previous:
        return <Icon24ChevronLeft className={styles.icon} />;

      case PaginationType.Next:
        return <Icon24ChevronRight className={styles.icon} />;

      case PaginationType.StartEllipsis:
      case PaginationType.EndEllipsis:
        return '...';

      default:
        return item.page;
    }
  };

  return (
    <div
      role="tablist"
      className={classNames(
        styles.wrapper,
        disabled && styles['wrapper--disabled'],
        className,
      )}
      aria-disabled={disabled}
      {...restProps}
    >
      {paginationItems.map((item) => {
        const isEllipsis = [PaginationType.StartEllipsis, PaginationType.EndEllipsis].includes(item.type);

        return (
          <Headline
            key={`${item.type}${item.page}`}
            Component={isEllipsis ? 'div' : 'button'}
            weight="2"
            className={classNames(styles.button, {
              [styles['button--ellipsis']]: isEllipsis,
              [styles['button--selected']]: item.selected,
              [styles['button--disabled']]: item.disabled,
            })}
            aria-disabled={item.disabled || undefined}
            aria-current={item['aria-current']}
            onClick={item.disabled || isEllipsis ? undefined : item.onClick}
          >
            {getPaginationChild(item)}
          </Headline>
        );
      })}
    </div>
  );
};
