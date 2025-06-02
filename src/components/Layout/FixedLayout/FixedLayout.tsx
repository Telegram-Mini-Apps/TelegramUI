import type { AllHTMLAttributes, ElementType } from 'react';
import styles from './FixedLayout.module.css';

import { classNames } from 'helpers/classNames';
import type { RefProps } from 'types/ref';

export interface FixedLayoutProps extends AllHTMLAttributes<HTMLElement> {
  /** The component type to render, allowing for semantic HTML use. Defaults to 'div'. */
  Component?: ElementType;
  /** Determines the vertical positioning of the layout within its container. Options are 'top' or 'bottom'. */
  vertical?: 'top' | 'bottom';
}

const verticalStyles = {
  top: styles['wrapper--top'],
  bottom: styles['wrapper--bottom'],
};

/**
 * This component provides a flexible way to create a layout that is fixed to either the top or bottom of its parent container.
 * It's useful for creating headers, footers, or any element that should remain in view regardless of the scrolling content.
 */
export const FixedLayout = ({
  ref,
  Component = 'div',
  vertical = 'bottom',
  className,
  children,
  ...restProps
}: FixedLayoutProps & RefProps) => {
  return (
    <Component
      ref={ref}
      className={classNames(
        styles.wrapper,
        vertical && verticalStyles[vertical],
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};
