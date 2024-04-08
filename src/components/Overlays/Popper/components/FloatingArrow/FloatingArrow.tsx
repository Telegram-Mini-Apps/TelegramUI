import { ComponentType, forwardRef, HTMLAttributes, SVGAttributes } from 'react';
import styles from './FloatingArrow.module.css';

import { classNames } from 'helpers/classNames';

import { Placement } from '@floating-ui/react-dom';

import { Coords, getArrowPositionData } from './helpers/getArrowPositionData';
import { DefaultIcon } from './icons/arrow';

const placementStyles = {
  right: styles['wrapper--placement-right'],
  bottom: styles['wrapper--placement-bottom'],
  left: styles['wrapper--placement-left'],
};

export interface FloatingArrowProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional distance from the target element, influencing the arrow's placement. */
  offset?: number;
  /** When true, the offset distance remains constant, regardless of the arrow's placement. */
  isStaticOffset?: boolean;
  /** Coordinates for the arrow, useful for precise positioning when the arrow is not directly adjacent to its target. */
  coords?: Coords;
  /** The preferred placement of the arrow relative to its target element. */
  placement?: Placement;
  /** A React component for rendering the arrow icon, allowing for custom arrow designs. */
  Icon?: ComponentType<SVGAttributes<SVGSVGElement>>;
}

/**
 * FloatingArrow dynamically positions an arrow indicator relative to a floating element,
 * such as a tooltip to signify its association with a target element.
 * Supports custom arrow icons and positioning adjustments.
 */
export const FloatingArrow = forwardRef<HTMLDivElement, FloatingArrowProps>(({
  style,
  offset,
  isStaticOffset,
  coords,
  placement = 'bottom',
  Icon = DefaultIcon,
  className,
  ...restProps
}, ref) => {
  const [arrowPlacement, arrowStyles] = getArrowPositionData(
    placement,
    coords,
    offset,
    isStaticOffset,
  );

  return (
    <div
      ref={ref}
      style={{
        ...arrowStyles,
        ...style,
      }}
      className={classNames(
        styles.wrapper,
        arrowPlacement && placementStyles[arrowPlacement],
        className,
      )}
      {...restProps}
    >
      <Icon className={styles.icon} />
    </div>
  );
});
