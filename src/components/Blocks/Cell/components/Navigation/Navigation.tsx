'use client';

import { HTMLAttributes } from 'react';
import styles from './Navigation.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Icon16Chevron } from 'icons/16/chevron';

import { Text } from 'components/Typography/Text/Text';

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

/**
 * Renders a navigation element with optional text content and an icon. The presence of the icon is
 * dependent on the content and the platform, providing flexibility for different UI scenarios.
 */
export const Navigation = ({ className, children }: NavigationProps) => {
  const platform = usePlatform();
  const hasChildren = hasReactNode(children);

  return (
    <div className={classNames(styles.wrapper, className)}>
      {hasChildren && <Text className={styles.text}>{children}</Text>}
      {(!hasChildren || platform === 'ios') && <Icon16Chevron className={styles.icon} />}
    </div>
  );
};
