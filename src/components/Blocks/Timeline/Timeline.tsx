import { Children, cloneElement, HTMLAttributes, isValidElement, ReactElement } from 'react';
import styles from './Timeline.module.css';

import { classNames } from 'helpers/classNames';

import { HorizontalScroll } from 'components/Service/HorizontalScroll/HorizontalScroll';
import { TimelineItem, TimelineItemProps } from './components/TimelineItem/TimelineItem';

export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  /** If true, the timeline will be horizontal */
  horizontal?: boolean;
  /** Marks lines and dots of the items before the active one */
  active?: number;
  /** Pass Timeline.Item[] here */
  children: ReactElement<TimelineItemProps>[];
}

export const Timeline = ({
  active,
  horizontal,
  className,
  children,
  ...restProps
}: TimelineProps) => {
  const getChildMode = (childNumber: number): TimelineItemProps['mode'] => {
    if (!active) {
      return undefined;
    }

    if (childNumber <= active) {
      return 'active';
    }

    if (childNumber === active + 1) {
      return 'pre-active';
    }

    return undefined;
  };

  const Component = horizontal ? HorizontalScroll : 'ul';
  return (
    <Component
      className={classNames(
        styles.wrapper,
        horizontal && styles['wrapper--horizontal'],
        className,
      )}
      {...restProps}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            mode: getChildMode(index + 1),
            horizontal,
            ...child.props,
          });
        }

        return child;
      })}
    </Component>
  );
};

Timeline.Item = TimelineItem;
