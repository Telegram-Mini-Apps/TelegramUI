import { HTMLAttributes } from 'react';
import styles from './SegmentedControlItem.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Caption } from 'components/Typography/Caption/Caption';

export interface SegmentedControlItemProps extends HTMLAttributes<HTMLInputElement> {
  /** Sets item selected state, will be checked by parent (SegmentedControl) */
  selected?: boolean;
}

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
