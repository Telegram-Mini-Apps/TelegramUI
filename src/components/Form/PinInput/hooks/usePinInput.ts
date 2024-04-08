'use client';

import { useCallback, useRef } from 'react';

import { Keys } from 'helpers/accessibility';
import { clamp } from 'helpers/math';
import { useCustomEnsuredControl } from 'hooks/useEnsureControl';

interface UsePinInputProps {
  pinCount: number;
  value?: number[];
  onChange?(value: number[]): void;
}

export const AVAILABLE_PINS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, Keys.BACKSPACE];

export const usePinInput = ({
  pinCount,
  value: valueProp = [],
  onChange,
}: UsePinInputProps) => {
  const inputRefs = useRef<HTMLLabelElement[]>([]).current;
  const [value, setValue] = useCustomEnsuredControl({
    defaultValue: valueProp,
    onChange,
  });

  const focusByIndex = (index: number) => {
    requestAnimationFrame(() => inputRefs[index]?.focus());
  };

  const setValueByIndex = (index: number, newValue: number) => {
    setValue((prev) => {
      const nextValue = [...prev];
      nextValue[index] = newValue;
      return nextValue;
    });
  };

  const removeLastValue = (currentIndex: number) => {
    setValue((prev) => prev.slice(0, -1));
    focusByIndex(currentIndex - 1);
  };

  const handleClickValue = useCallback((enteredValue: number) => {
    const lastIndex = clamp(value.length, 0, pinCount - 1);
    setValueByIndex(lastIndex, enteredValue);
    focusByIndex(lastIndex + 1);
  }, [value, pinCount]);

  const handleClickBackspace = useCallback(() => {
    removeLastValue(value.length - 1);
  }, [value]);

  const handleButton = useCallback((index: number, button: string) => {
    if (AVAILABLE_PINS.includes(Number(button))) {
      setValueByIndex(index, Number(button));
      focusByIndex(index + 1);
    }

    switch (button) {
      case Keys.BACKSPACE:
        removeLastValue(index);
        break;

      case Keys.ARROW_LEFT:
        focusByIndex(index - 1);
        break;

      case Keys.ARROW_RIGHT:
        focusByIndex(index + 1);
        break;

      default:
        break;
    }
  }, []);

  const setInputRefByIndex = useCallback((index: number, ref: HTMLLabelElement | null) => {
    if (!ref) {
      return;
    }

    inputRefs[index] = ref;
  }, []);

  return {
    value,
    setInputRefByIndex,
    handleClickValue,
    handleClickBackspace,
    handleButton,
  };
};
