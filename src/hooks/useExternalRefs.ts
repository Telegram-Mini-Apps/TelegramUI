'use client';

import { MutableRefObject, Ref, useMemo, useRef } from 'react';

import { setRef } from 'helpers/react/refs';

export function useExternRef<T>(
  ...externRefs: Array<Ref<T> | undefined | false>
): MutableRefObject<T | null> {
  const stableRef = useRef<T | null>(null);

  return useMemo(
    () => ({
      get current() {
        return stableRef.current;
      },
      set current(el) {
        stableRef.current = el;
        externRefs.forEach((ref) => {
          if (ref) {
            setRef(el, ref);
          }
        });
      },
    }),
    externRefs,
  );
}
