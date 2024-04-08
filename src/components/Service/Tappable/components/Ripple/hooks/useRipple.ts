'use client';

import { PointerEventHandler, useMemo, useState } from 'react';

import { useTimeout } from 'hooks/useTimeout';

import { Wave } from '../types/Wave';

const RIPPLE_DELAY = 70;
const WAVE_LIVE = 225;

export const useRipple = () => {
  const [clicks, setClicks] = useState<Wave[]>([]);

  const pointerDelayTimers = useMemo(
    () => new Map<number, ReturnType<typeof setTimeout>>(),
    [],
  );

  const clearClicks = useTimeout(() => setClicks([]), WAVE_LIVE);

  function addClick(x: number, y: number, pointerId: number) {
    const dateNow = Date.now();
    const filteredClicks = clicks.filter((click) => click.date + WAVE_LIVE > dateNow);

    setClicks([
      ...filteredClicks,
      {
        x,
        y,
        date: dateNow,
        pointerId,
      },
    ]);

    clearClicks.set();
    pointerDelayTimers.delete(pointerId);
  }

  const onPointerDown: PointerEventHandler<HTMLSpanElement> = (e) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (left ?? 0);
    const y = e.clientY - (top ?? 0);

    pointerDelayTimers.set(
      e.pointerId,
      setTimeout(() => addClick(x, y, e.pointerId), RIPPLE_DELAY),
    );
  };

  const onPointerCancel: PointerEventHandler<HTMLSpanElement> = (e) => {
    const timer = pointerDelayTimers.get(e.pointerId);
    clearTimeout(timer);
    pointerDelayTimers.delete(e.pointerId);
  };

  return {
    clicks,
    onPointerDown,
    onPointerCancel,
  };
};
