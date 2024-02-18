import { HTMLAttributes } from 'react';
import styles from './Navigation.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Icon16Chevron } from 'icons/16/chevron';

import { Text } from 'components/Typography/Text/Text';

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

export const Navigation = ({ className, children }: NavigationProps) => {
  const platform = usePlatform();
  const hasChildren = hasReactNode(children);

  return (
    <div className={classNames(styles.wrapper, className)}>
      {hasChildren && <Text>{children}</Text>}
      {(!hasChildren || platform === 'ios') && <Icon16Chevron />}
    </div>
  );
};
