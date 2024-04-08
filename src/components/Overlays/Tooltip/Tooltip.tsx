import styles from './Tooltip.module.css';

import { classNames } from 'helpers/classNames';

import { Popper, PopperProps } from 'components/Overlays/Popper/Popper';
import { Caption } from 'components/Typography/Caption/Caption';

export interface TooltipProps extends PopperProps {
  /** Defines the theme of the tooltip, affecting its background and text color. */
  mode?: 'light' | 'dark';
}

/**
 * The Tooltip component provides text labels that appear when the user hovers over, focuses on,
 * or touches an element. It's built on top of the Popper component for automatic positioning
 * relative to the target element. The tooltip supports light and dark modes for different visual
 * contexts and uses the Caption component for its content to ensure consistent typography.
 */
export const Tooltip = ({
  mode = 'light',
  children,
  className,
  arrowProps,
  ...restProps
}: TooltipProps) => (
  <Popper
    withArrow
    arrowProps={{
      ...arrowProps,
      className: classNames(
        styles.arrow,
        arrowProps?.className,
      ),
    }}
    className={classNames(
      styles.wrapper,
      mode === 'dark' && styles['wrapper--dark'],
      className,
    )}
    {...restProps}
  >
    <Caption level="1">{children}</Caption>
  </Popper>
);
