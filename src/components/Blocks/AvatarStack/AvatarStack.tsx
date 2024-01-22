import { HTMLAttributes } from 'react';
import styles from './AvatarStack.module.css';

import { classNames } from 'helpers/classNames';

export interface AvatarStackProps extends HTMLAttributes<HTMLDivElement> {
}

export const AvatarStack = ({
  children,
  ...restProps
}: AvatarStackProps) => {
  return (
    <div
      {...restProps}
      className={classNames(styles.wrapper)}
    >
      {children}
    </div>
  );
};
