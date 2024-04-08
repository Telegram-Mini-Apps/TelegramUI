'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './TabbarItem.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Caption } from 'components/Typography/Caption/Caption';

export interface TabbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Indicates whether the tab is selected or active. */
  selected?: boolean;
  /** The text displayed on the tab. */
  text?: string;
  /** The icon displayed on the tab. It should be passed as a ReactNode with dimensions of 28x28. */
  children?: ReactNode;
}

/**
 * Represents an individual tab within a `Tabbar`.
 * Each `Tabbar.Item` typically contains an icon and optional text.
 * When selected, the tab exhibit different visual styles to indicate its active state.
 *
 * The component adapts its styling based on the platform, providing a consistent look and feel across different devices.
 */
export const TabbarItem = ({
  selected,
  text,
  children,
  className,
  ...restProps
}: TabbarItemProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="button"
      interactiveAnimation="opacity"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        selected && styles['wrapper--selected'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(children) && (
        <div className={styles.icon}>
          {children}
        </div>
      )}
      {hasReactNode(text) && (
        <Caption
          className={styles.text}
          weight="2"
          level={platform === 'ios' ? '2' : '1'}
        >
          {text}
        </Caption>
      )}
    </Tappable>
  );
};
