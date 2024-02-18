import { MutableRefObject, Ref, RefObject } from 'react';

export const setRef = <T>(element: T, ref?: Ref<T>): void => {
  if (ref) {
    if (typeof ref === 'function') {
      ref(element);
    } else {
      // eslint-disable-next-line no-param-reassign
      (ref as MutableRefObject<T>).current = element;
    }
  }
};

export const multipleRef = <T>(...refs: Array<Ref<T> | undefined>): RefObject<T> => {
  let current: T | null = null;
  return {
    get current() {
      return current;
    },
    set current(element) {
      current = element;
      refs.forEach((ref) => ref && setRef(element, ref));
    },
  };
};
