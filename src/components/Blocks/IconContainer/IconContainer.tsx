'use client';

import type { HTMLAttributes } from 'react';
import styles from './IconContainer.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

export interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Background color for the icon container. */
  color?: string;
}

const platformStyle = {
  ios: styles['wrapper--ios'],
  base: styles['wrapper--base'],
};

export const IconContainer = ({
  className,
  children,
  color,
  ...restProps
}: IconContainerProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        styles.wrapper,
        color && platformStyle[platform],
        className
      )}
      style={
        color && platform === 'ios'
          ? {
              backgroundColor: color,
              color: '#fff',
            }
          : undefined
      }
      {...restProps}
    >
      {children}
    </div>
  );
};
