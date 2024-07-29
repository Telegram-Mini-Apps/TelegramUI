'use client';

import { HTMLAttributes, ReactElement } from 'react';
import styles from './Tabbar.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FixedLayout } from 'components/Layout/FixedLayout/FixedLayout';
import { TabbarItem, TabbarItemProps } from './components/TabbarItem/TabbarItem';

export interface TabbarProps extends HTMLAttributes<HTMLDivElement> {
  /** The child elements of the Tabbar, expected to be `Tabbar.Item` components. */
  children: ReactElement<TabbarItemProps>[];
}

/**
 * Serves as a container for `Tabbar.Item` components, rendering a navigational tab bar.
 * Utilizes a `FixedLayout` to ensure the tab bar remains positioned at a specific area within a view,
 * typically at the bottom of the screen, making it ideal for mobile or web application navigation menus.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */
export const Tabbar = ({
  children,
  className,
  ...restProps
}: TabbarProps) => {
  const platform = usePlatform();

  return (
    <FixedLayout
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      {children}
    </FixedLayout>
  );
};

Tabbar.Item = TabbarItem;
