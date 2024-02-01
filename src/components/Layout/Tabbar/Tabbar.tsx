import { HTMLAttributes, ReactElement } from 'react';
import styles from './Tabbar.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FixedLayout } from 'components/Layout/FixedLayout/FixedLayout';
import { TabbarItem, TabbarItemProps } from './components/TabbarItem/TabbarItem';

export interface TabbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement<TabbarItemProps>[];
}

export const Tabbar = ({ children, ...restProps }: TabbarProps) => {
  const platform = usePlatform();

  return (
    <FixedLayout
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
      )}
      {...restProps}
    >
      {children}
    </FixedLayout>
  );
};

Tabbar.Item = TabbarItem;
