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
  /** Distance from the target element for the arrow's placement, in pixels. */
  offset?: number;
  /** Flag indicating if the `offset` should remain constant, not adjusting dynamically. */
  isStaticOffset?: boolean;
  /** Coordinates object for precise arrow positioning. */
  coords?: Coords;
  /** Placement directive for the arrow's position relative to the target. */
  placement?: Placement;
  /** React component type for custom SVG arrow icon. */
  Icon?: ComponentType<SVGAttributes<SVGSVGElement>>;
}

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
