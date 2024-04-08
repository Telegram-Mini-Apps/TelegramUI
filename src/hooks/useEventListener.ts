'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';

import { canUseDOM } from 'helpers/dom';

import { useEnhancedEffect } from './useEnhancedEffect';

interface EventListenerHandle {
  add: (el: HTMLElement | Document | Window) => void;
  remove: () => void;
}

export function useEventListener<K extends keyof GlobalEventHandlersEventMap>(
  event: K,
  _cb: false | null | undefined | ((ev: GlobalEventHandlersEventMap[K]) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle;

export function useEventListener<E extends Event>(
  event: string,
  _cb: false | null | undefined | ((ev: E) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle;
/**
 * Custom React hook for handling event listeners in a declarative way.
 * Copied from https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/hooks/useEventListener.ts
 * */
export function useEventListener<E extends Event, K extends keyof GlobalEventHandlersEventMap>(
  event: string | K,
  _cb: false | null | undefined | ((ev: E) => void),
  _options?: AddEventListenerOptions,
): EventListenerHandle {
  const cbRef = useRef(_cb);

  useEnhancedEffect(() => {
    cbRef.current = _cb;
  }, [_cb]);

  // Callback function to be executed when the event occurs
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const cb = useCallback((e: any) => cbRef.current && cbRef.current(e), []);

  // Refs to store the detach and remove functions
  const detach = useRef(() => {});
  const remove = useCallback(() => {
    detach.current();
    detach.current = () => {};
  }, []);

  const add = useCallback(
    (el: HTMLElement | Document | Window) => {
      if (!canUseDOM) {
        return;
      }

      remove();
      if (!el) {
        return;
      }

      const options = { ..._options };
      el.addEventListener(event, cb, options);
      detach.current = () => el.removeEventListener(event, cb, options);
    },
    [_options, cb, event, remove],
  );

  useEffect(() => remove, [remove]);
  return useMemo(() => ({ add, remove }), [add, remove]);
}
