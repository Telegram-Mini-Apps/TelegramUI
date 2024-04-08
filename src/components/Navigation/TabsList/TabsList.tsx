import { Children, HTMLAttributes, isValidElement, ReactElement } from 'react';
import styles from './TabsList.module.css';

import { classNames } from 'helpers/classNames';

import { TabsItem, TabsItemProps } from './components/TabsItem/TabsItem';

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Children should be TabsList.Item components to be rendered as tabs. */
  children: ReactElement<TabsItemProps>[];
}

/**
 * The TabsList component renders a list of tabs, typically used for navigating between different views
 * or filtering content. It visually indicates the currently active tab and supports custom styling.
 */
export const TabsList = ({
  className,
  children,
  ...restProps
}: TabsListProps) => {
  const childrenAsArray = Children.toArray(children);
  const checkedIndex = childrenAsArray.findIndex((option) => {
    return isValidElement(option) && option.props.selected;
  });

  const translateX = `translateX(${100 * checkedIndex}%)`;
  return (
    <div
      role="tablist"
      className={classNames(
        styles.wrapper,
        className,
      )}
      {...restProps}
    >
      {checkedIndex > -1 && (
        <div
          aria-hidden
          className={styles.slider}
          style={{
            width: `${100 / childrenAsArray.length}%`,
            transform: translateX,
          }}
        />
      )}
      {children}
    </div>
  );
};

TabsList.Item = TabsItem;
