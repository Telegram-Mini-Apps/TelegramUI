'use client';

import type { Ref, RefObject } from 'react';
import { useMemo, useRef } from 'react';

import { setRef } from 'helpers/react/refs';

export function useExternRef<T>(
  ...externRefs: (Ref<T> | undefined | false)[]
): RefObject<T | null> {
  const stableRef = useRef<T | null>(null);

  return useMemo(
    () => ({
      get current() {
        return stableRef.current;
      },
      set current(el) {
        stableRef.current = el;
        for (const ref of externRefs) {
          if (ref) {
            setRef(el, ref);
          }
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    externRefs
  );
}
