import { Children, HTMLAttributes, isValidElement, ReactElement } from 'react';
import styles from './TabsList.module.css';

import { classNames } from 'helpers/classNames';

import { TabsItem, TabsItemProps } from './components/TabsItem/TabsItem';

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Pass TabsList.Item components here */
  children: ReactElement<TabsItemProps>[];
}

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
