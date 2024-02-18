/* eslint-disable @typescript-eslint/no-explicit-any */

import { canUseDOM } from 'helpers/dom';

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function throttle<T extends any[]>(
  fn: (...args: T) => unknown,
  threshold = 50,
  scope = canUseDOM ? window : undefined,
) {
  let prevDate: number = Date.now() - threshold;
  let timeoutId: ReturnType<typeof setTimeout>;

  const throttledFn = (...args: T) => {
    const timeLeft = prevDate + threshold - Date.now();

    clearTimeout(timeoutId);
    if (timeLeft > 0) {
      timeoutId = setTimeout(() => {
        prevDate = Date.now();
        fn.apply(scope, args);
      }, timeLeft);
      return;
    }

    prevDate = Date.now();
    fn.apply(scope, args);
  };

  throttledFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return throttledFn;
}

export function debounce<T extends any[]>(
  fn: (...args: T) => unknown,
  delay: number,
  context = canUseDOM ? window : undefined,
) {
  let timeoutId: ReturnType<typeof setTimeout>;
  let args: T;

  const later = () => fn.apply(context, args);
  const debouncedFn = (...a: T) => {
    args = a;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);
  };

  debouncedFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFn;
}
