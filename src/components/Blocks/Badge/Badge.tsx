import { HTMLAttributes } from 'react';
import styles from './Badge.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge type */
  type: 'number' | 'dot';
  /** Badge mode, only color and background will be changed */
  mode?: 'primary' | 'critical' | 'secondary' | 'gray' | 'white';
  /** Badge size, applies only to type=number */
  large?: boolean;
}

const typeStyles = {
  number: styles['wrapper--number'],
  dot: styles['wrapper--dot'],
};

const modeStyles = {
  primary: styles['wrapper--primary'],
  critical: styles['wrapper--critical'],
  secondary: styles['wrapper--secondary'],
  gray: styles['wrapper--gray'],
  white: styles['wrapper--white'],
};

export const Badge = ({
  type,
  mode = 'primary',
  large,
  className,
  children,
  ...restProps
}: BadgeProps) => {
  const isNumber = type === 'number';
  return (
    <span
      className={classNames(
        styles.wrapper,
        typeStyles[type],
        modeStyles[mode],
        isNumber && large && styles['wrapper--large'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(children) && isNumber && (
        <>
          {large && <Subheadline Component="span" level="2" weight="2">{children}</Subheadline>}
          {!large && <Caption weight="2">{children}</Caption>}
        </>
      )}
    </span>
  );
};
