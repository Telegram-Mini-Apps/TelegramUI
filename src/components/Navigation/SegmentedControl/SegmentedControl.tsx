import { Children, HTMLAttributes, isValidElement, ReactElement } from 'react';
import styles from './SegmentedControl.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { SegmentedControlItem, SegmentedControlItemProps } from './components/SegmentedControlItem/SegmentedControlItem';

export interface SegmentedControlProps extends HTMLAttributes<HTMLDivElement> {
  /** Children should be SegmentedControl.Item components to render within the control. */
  children: ReactElement<SegmentedControlItemProps>[];
}

/**
 * The SegmentedControl component renders a set of options as a segmented control, commonly used for toggling between views or filtering content.
 * It is designed to adapt its appearance based on the platform, offering a native look and feel.
 * This component supports interactivity through selection, visually indicating the currently active option.
 */
export const SegmentedControl = ({
  className,
  children,
  ...restProps
}: SegmentedControlProps) => {
  const platform = usePlatform();

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
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      <div className={styles.body}>
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
