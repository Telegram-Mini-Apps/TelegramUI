import { ButtonHTMLAttributes } from 'react';
import styles from './TabsItem.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Text } from 'components/Typography/Text/Text';

export interface TabsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Sets item selected state, will be checked by parent (TabsList) */
  selected?: boolean;
}

export const TabsItem = ({
  selected,
  className,
  children,
  ...restProps
}: TabsItemProps) => {
  const platform = usePlatform();
  const iosWeight = selected ? '1' : '2';

  return (
    <Tappable
      role="tab"
      Component="button"
      className={classNames(
        styles.wrapper,
        selected && styles['wrapper--selected'],
        className,
      )}
      {...restProps}
    >
      <Text
        weight={platform === 'ios' ? iosWeight : '2'}
      >
        {children}
      </Text>
    </Tappable>
  );
};
