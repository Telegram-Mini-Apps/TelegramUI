'use client';

import { useCallback, useRef } from 'react';

import { useEnhancedEffect } from 'hooks/useEnhancedEffect';

interface TimeoutController {
  set: () => void;
  clear: () => void;
}

export const useTimeout = (
  callbackFunction: () => void,
  duration: number
): TimeoutController => {
  const options = useRef({ callbackFunction, duration });

  useEnhancedEffect(() => {
    options.current.callbackFunction = callbackFunction;
    options.current.duration = duration;
  }, [callbackFunction, duration]);

  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const clear = useCallback(() => clearTimeout(timeout?.current), []);

  const set = useCallback(() => {
    clear();
    timeout.current = setTimeout(
      options.current.callbackFunction,
      options.current.duration
    );
  }, [clear]);

  return { set, clear };
};
