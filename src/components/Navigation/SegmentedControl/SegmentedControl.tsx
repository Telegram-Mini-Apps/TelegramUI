import React, { Children, HTMLAttributes, ReactElement } from 'react';
import styles from './SegmentedControl.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { SegmentedControlItem, SegmentedControlItemProps } from './components/SegmentedControlItem/SegmentedControlItem';

export interface SegmentedControlProps extends HTMLAttributes<HTMLDivElement> {
  /** Pass SegmentedControl.Item components here */
  children: ReactElement<SegmentedControlItemProps>[];
}

export const SegmentedControl = ({
  className,
  children,
  ...restProps
}: SegmentedControlProps) => {
  const platform = usePlatform();

  const childrenAsArray = Children.toArray(children);
  const checkedIndex = childrenAsArray.findIndex((option) => {
    return React.isValidElement(option) && option.props.selected;
  });

  const translateX = `translateX(${100 * checkedIndex}%)`;
  return (
    <div
      role="tablist"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      <div className={classNames(
        styles.body,
        childrenAsArray.length > 2 && styles['body--withSeparators'],
      )}>
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
    </div>
  );
};

SegmentedControl.Item = SegmentedControlItem;
