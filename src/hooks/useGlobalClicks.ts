import type { RefObject } from 'react';

import { isElement } from 'helpers/dom';
import { useEnhancedEffect } from 'hooks/useEnhancedEffect';

/**
 * Function helps to handle global clicks outside the given refs
 * If the click is outside the given refs, the callback will be called
 */
export const useGlobalClicks = <
  T extends RefObject<ElementType | null> | undefined | null,
  ElementType extends Element = Element,
>(
  callback: (event: MouseEvent) => void,
  ...refs: T[]
) => {
  useEnhancedEffect(() => {
    const hasNotNullRefs = refs.some((ref) => ref && ref.current !== null);
    if (!document || !hasNotNullRefs) {
      return () => {};
    }

    const handleClick = (event: MouseEvent) => {
      const targetEl = event.target;
      const isClickInsideGivenRefs =
        isElement(targetEl) &&
        refs.some(
          (ref) => ref && ref.current && ref.current.contains(targetEl)
        );

      if (!isClickInsideGivenRefs) {
        callback(event);
      }
    };

    document.addEventListener('click', handleClick, {
      passive: true,
      capture: true,
    });

    return () => document.removeEventListener('click', handleClick, true);
  }, [document, callback, ...refs]);
};
