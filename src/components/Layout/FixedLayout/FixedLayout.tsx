import { AllHTMLAttributes, ElementType } from 'react';
import styles from './FixedLayout.module.css';

import { classNames } from 'helpers/classNames';

export interface FixedLayoutProps extends AllHTMLAttributes<HTMLElement> {
  /** DOM node, div by default */
  Component?: ElementType;
  /** Determine layout position */
  vertical?: 'top' | 'bottom';
}

const verticalStyles = {
  top: styles['wrapper--top'],
  bottom: styles['wrapper--bottom'],
};

export const FixedLayout = ({
  Component = 'div',
  vertical = 'bottom',
  className,
  children,
  ...restProps
}: FixedLayoutProps) => {
  return (
    <Component
      className={classNames(
        styles.wrapper,
        vertical && verticalStyles[vertical],
        className,
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

