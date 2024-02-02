import { useMemo } from 'react';

import {
  arrow,
  ArrowOptions,
  autoPlacement,
  flip,
  Middleware,
  offset,
  shift,
  size,
} from '@floating-ui/react-dom';

import { getAutoPlacementAlignment, isNotAutoPlacement } from './helpers/alignment';
import { PlacementWithAuto } from './types';

export interface UseFloatingMiddlewaresOptions {
  /** By default, the component will automatically choose the best placement */
  placement?: PlacementWithAuto;
  /** Offset along the main axis. */
  offsetByMainAxis?: number;
  /** Offset along the cross axis. */
  offsetByCrossAxis?: number;
  /** Ref for arrow element */
  arrowRef?: ArrowOptions['element'];
  /** Whether to display an arrow pointing to the anchor element. */
  withArrow?: boolean;
  /** The height of the arrow. This is added to `mainAxis` to prevent the arrow from overlapping the anchor element. */
  arrowHeight?: number;
  /** A safe zone around the arrow to prevent it from exceeding the content bounds. */
  arrowPadding?: number;
  /** Sets the width to match the target element. */
  sameWidth?: boolean;
  /** An array of custom modifiers for Popper (should be memoized). */
  customMiddlewares?: Middleware[];
}

export const useFloatingMiddlewares = ({
  placement = 'bottom-start',
  arrowRef = null,
  withArrow,
  arrowHeight,
  arrowPadding,
  sameWidth,
  offsetByMainAxis = 0,
  offsetByCrossAxis = 0,
  customMiddlewares,
}: UseFloatingMiddlewaresOptions) => {
  return useMemo(() => {
    const isNotAutoPlaced = isNotAutoPlacement(placement);
    const middlewares: Middleware[] = [
      offset({
        crossAxis: offsetByCrossAxis,
        mainAxis: withArrow && arrowHeight ? offsetByMainAxis + arrowHeight : offsetByMainAxis,
      }),
    ];

    if (isNotAutoPlaced) {
      middlewares.push(
        flip({
          fallbackAxisSideDirection: 'start',
        }),
      );
    } else {
      middlewares.push(autoPlacement({
        alignment: getAutoPlacementAlignment(placement),
      }));
    }

    middlewares.push(shift());

    if (sameWidth) {
      middlewares.push(
        size({
          apply({ rects, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
            });
          },
        }),
      );
    }

    if (customMiddlewares) {
      middlewares.push(...customMiddlewares);
    }

    if (withArrow) {
      middlewares.push(
        arrow({
          element: arrowRef,
          padding: arrowPadding,
        }),
      );
    }

    return {
      middlewares,
      strictPlacement: isNotAutoPlaced ? placement : undefined,
    };
  }, [
    offsetByCrossAxis,
    arrowRef,
    withArrow,
    arrowHeight,
    arrowPadding,
    offsetByMainAxis,
    sameWidth,
    customMiddlewares,
    placement,
  ]);
};
