import { Children, cloneElement, HTMLAttributes, isValidElement, ReactElement } from 'react';
import styles from './Timeline.module.css';

import { classNames } from 'helpers/classNames';

import { HorizontalScroll } from 'components/Service/HorizontalScroll/HorizontalScroll';
import { TimelineItem, TimelineItemProps } from './components/TimelineItem/TimelineItem';

export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  /** Determines the orientation of the timeline. If true, the timeline is displayed horizontally. */
  horizontal?: boolean;
  /** The index of the active item in the timeline, which affects styling to indicate progress. */
  active?: number;
  /** The children of the Timeline, expected to be a collection of `Timeline.Item` components. */
  children: ReactElement<TimelineItemProps>[];
}

/**
 * Renders a sequence of events or steps in either a vertical or horizontal layout. It is flexible,
 * supporting an active state to visually distinguish past, present, and future steps.
 */
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
