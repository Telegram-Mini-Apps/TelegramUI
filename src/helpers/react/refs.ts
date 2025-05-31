import type { Ref, RefObject } from 'react';

export const setRef = <T>(element: T, ref?: Ref<T>): void => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      (ref as RefObject<T>).current = element;
    }
  }
};

export const multipleRef = <T>(
  ...refs: (Ref<T> | undefined)[]
): RefObject<T | null> => {
  let current: T | null = null;
  return {
    get current() {
      return current;
    },
    set current(element) {
      current = element;
      for (const ref of refs) {
        if (ref) {
          setRef(element, ref);
        }
      }
    },
  };
};
