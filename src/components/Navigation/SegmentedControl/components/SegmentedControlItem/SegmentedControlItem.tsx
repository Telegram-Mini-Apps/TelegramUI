'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from './SegmentedControlItem.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Caption } from 'components/Typography/Caption/Caption';

export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the item is selected. Used by the parent SegmentedControl to style accordingly. */
  selected?: boolean;
}

/**
 * A component representing an individual item within a SegmentedControl.
 * It leverages the Tappable component for handling interactions and supports platform-specific styles.
 */
export const SegmentedControlItem = ({
  selected,
  className,
  children,
  ...restProps
}: SegmentedControlItemProps) => {
  const platform = usePlatform();
  return (
    <Tappable
      role="tab"
      Component="button"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      <Caption weight={selected ? '2' : '3'}>{children}</Caption>
    </Tappable>
  );
};
