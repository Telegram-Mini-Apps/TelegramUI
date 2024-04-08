/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import { AllHTMLAttributes, DragEvent, ElementType, MouseEvent as ReactMouseEvent, useMemo, useRef } from 'react';

import { useEnhancedEffect } from 'hooks/useEnhancedEffect';
import { useEventListener } from 'hooks/useEventListener';

import { coordX, coordY, getSupportedEvents, initGesture, touchEnabled } from './helpers/touch';
import { CustomTouchEvent, Gesture } from './helpers/types';

export interface TouchProps extends AllHTMLAttributes<HTMLElement> {
  usePointerHover?: boolean;
  useCapture?: boolean;
  slideThreshold?: number;
  noSlideClick?: boolean;
  onEnter?: HoverHandler;
  onLeave?: HoverHandler;
  onStart?: TouchEventHandler;
  onStartX?: TouchEventHandler;
  onStartY?: TouchEventHandler;
  onMove?: TouchEventHandler;
  onMoveX?: TouchEventHandler;
  onMoveY?: TouchEventHandler;
  onEnd?: TouchEventHandler;
  onEndX?: TouchEventHandler;
  onEndY?: TouchEventHandler;
  stopPropagation?: boolean;
  Component?: ElementType;
}

export interface TouchEvent extends Gesture {
  originalEvent: CustomTouchEvent;
}

type HoverHandler = (outputEvent: MouseEvent) => void;
export type TouchEventHandler = (e: TouchEvent) => void;
export type ClickHandler = (e: ReactMouseEvent<HTMLElement>) => void;
export type DragHandler = (e: DragEvent<HTMLElement>) => void;

/**
 * This component is copied from the VKUI library for convenient handling of pointer events
 * https://github.com/VKCOM/VKUI/blob/master/packages/vkui/src/components/Touch/Touch.tsx#L65
 */
export const Touch = ({
  Component = 'div',
  onStart,
  onStartX,
  onStartY,
  onMove: _onMove,
  onMoveX,
  onMoveY,
  onLeave,
  onEnter,
  onEnd: _onEnd,
  onEndX,
  onEndY,
  onClickCapture,
  usePointerHover,
  slideThreshold = 5,
  useCapture = false,
  noSlideClick = false,
  stopPropagation = false,
  ...restProps
}: TouchProps) => {
  const events = useMemo(getSupportedEvents, []);
  const didSlide = useRef(false);
  const gesture = useRef<Partial<Gesture> | null>(null);

  const handle = (e: CustomTouchEvent, handlers: Array<TouchEventHandler | undefined | false>) => {
    stopPropagation && e.stopPropagation();
    handlers.forEach((cb) => {
      const duration = Date.now() - (gesture.current?.startT?.getTime() ?? 0);
      cb && cb({ ...(gesture.current as Gesture), duration, originalEvent: e });
    });
  };

  const listenerParams = { capture: useCapture, passive: false };
  const listeners = [
    useEventListener(events[1], onMove, listenerParams),
    useEventListener(events[2], onEnd, listenerParams),
    useEventListener(events[3], onEnd, listenerParams),
  ];

  const subscribe = (el: HTMLElement | Document | null | undefined) => {
    if (!el) {
      return;
    }

    listeners.forEach((l) => l.add(el));
  };

  const unsubscribe = () => {
    listeners.forEach((l) => l.remove());
  };

  const enterHandler = useEventListener(usePointerHover ? 'pointerenter' : 'mouseenter', onEnter);
  const leaveHandler = useEventListener(usePointerHover ? 'pointerleave' : 'mouseleave', onLeave);
  const startHandler = useEventListener(
    events[0],
    (e: CustomTouchEvent) => {
      gesture.current = initGesture(coordX(e), coordY(e));

      handle(e, [onStart, onStartX, onStartY]);
      subscribe(
        touchEnabled()
          ? // Touch events fire on the initial target and won't bubble if it's removed
        // see: #235, #1968, https://stackoverflow.com/a/45760014
          (e.target as HTMLElement)
          : // Mouse events fire on the element under the pointer, so we lose move / end
        // if the pointer goes outside the container.
        // Can be fixed by PointerEvents' setPointerCapture later
          window.document,
      );
    },
    { capture: useCapture, passive: false },
  );
  const containerRef = useRef();

  useEnhancedEffect(() => {
    const el = containerRef.current;
    if (el) {
      enterHandler.add(el);
      leaveHandler.add(el);
      startHandler.add(el);
    }
  }, [Component]);

  function onMove(e: CustomTouchEvent) {
    const { isPressed, isX, isY, startX = 0, startY = 0 } = gesture.current ?? {};

    if (isPressed) {
      const clientX = coordX(e);
      const clientY = coordY(e);

      // Offsets
      const shiftX = clientX - startX;
      const shiftY = clientY - startY;

      // Absolute offset values
      const shiftXAbs = Math.abs(shiftX);
      const shiftYAbs = Math.abs(shiftY);

      // If determining multitouch, interrupt the gesture
      if (!!e.touches && e.touches.length > 1) {
        onEnd(e);
        return;
      }

      // If we haven't determined yet
      if (!isX && !isY) {
        const willBeX = shiftXAbs >= slideThreshold && shiftXAbs > shiftYAbs;
        const willBeY = shiftYAbs >= slideThreshold && shiftYAbs > shiftXAbs;
        const willBeSlidedX = willBeX && (!!onMoveX || !!_onMove);
        const willBeSlidedY = willBeY && (!!onMoveY || !!_onMove);

        if (gesture.current) {
          Object.assign(gesture.current, {
            isY: willBeY,
            isX: willBeX,
            isSlideX: willBeSlidedX,
            isSlideY: willBeSlidedY,
            isSlide: willBeSlidedX || willBeSlidedY,
          });
        }
      }

      if (gesture.current?.isSlide) {
        Object.assign(gesture.current, {
          clientX,
          clientY,
          shiftX,
          shiftY,
          shiftXAbs,
          shiftYAbs,
        });

        handle(e, [
          _onMove,
          gesture.current.isSlideX && onMoveX,
          gesture.current.isSlideY && onMoveY,
        ]);
      }
    }
  }

  function onEnd(e: CustomTouchEvent) {
    const { isPressed, isSlide, isSlideX, isSlideY } = gesture.current ?? {};

    if (isPressed) {
      handle(e, [_onEnd, isSlideY && onEndY, isSlideX && onEndX]);
    }

    const isTouchEnabled = touchEnabled();

    if (isTouchEnabled && isSlide) {
      // If it's a touch device and touchmove was detected,
      // the click event won't be triggered
      didSlide.current = false;
    } else {
      didSlide.current = Boolean(isSlide);
    }
    gesture.current = {};

    // If it was a touch event, simulate hover cancellation
    if (isTouchEnabled) {
      onLeave && onLeave(e);
    }

    unsubscribe();
  }

  /**
   * Dragstart event handler
   * Cancels the native browser behavior for nested links and images
   */
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'IMG') {
      e.preventDefault();
    }
  };

  /**
   * Click event handler for the component
   * Cancels the transition through the nested link if a swipe was detected
   */
  const postGestureClick: typeof onClickCapture = (e) => {
    if (!didSlide.current) {
      onClickCapture && onClickCapture(e);
      return;
    }

    if (noSlideClick) {
      e.stopPropagation();
      e.preventDefault();
    } else {
      onClickCapture && onClickCapture(e);
    }

    didSlide.current = false;
  };

  return (
    <Component
      {...restProps}
      onDragStart={onDragStart}
      onClickCapture={postGestureClick}
      ref={containerRef}
    />
  );
};
