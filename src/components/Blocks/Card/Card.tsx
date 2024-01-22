import { HTMLAttributes } from 'react';
import styles from './Card.module.css';

import { classNames } from 'helpers/classNames';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card type, plain by default */
  type?: 'plain' | 'ambient';
}

export const Card = ({
  type = 'plain',
  className,
  ...restProps
}: CardProps) => (
  <div
    className={classNames(
      styles.wrapper,
      type === 'ambient' && styles['wrapper--ambient'],
      className,
    )}
    {...restProps}
  />
);
