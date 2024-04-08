'use client';

import { ChangeEvent, useMemo, useRef, useState } from 'react';

import { isEqual } from 'helpers/equal';
import { clamp } from 'helpers/math';

import { SliderProps } from 'components/Form/Slider/Slider';
import type { TouchEvent } from 'components/Service/Touch/Touch';
import { extractSliderAriaAttributes, getDraggingTypeByTargetDataset } from './helpers/html';
import { offsetXToScaledValue, toPercent } from './helpers/math';
import {
  determineSnapDirection,
  isMultipleValues,
  updateInternalStateByNativeChange,
  updateInternalStateValue,
} from './helpers/state';
import { InternalGestureRef, InternalValueState, Step } from './types';

export const useSlider = ({
  step = 1,
  min = 0,
  max = 100,
  value: valueProp,
  multiple: multipleProp,
  defaultValue = multipleProp ? [min, max] : min,
  disabled,
  getAriaLabel,
  getAriaValueText,
  onChange,
  ...restProps
}: SliderProps) => {
  const isControlled = valueProp !== undefined;
  const [localValue, setValue] = useState(defaultValue);

  const value = useMemo<InternalValueState>(() => {
    const resolvedValue = isControlled ? valueProp : localValue;

    return Array.isArray(resolvedValue)
      ? [clamp(resolvedValue[0], min, max), clamp(resolvedValue[1], min, max)]
      : [clamp(resolvedValue, min, max), null];
  }, [isControlled, valueProp, localValue, min, max]);

  const [startValue, endValue] = value;
  const multiple = multipleProp && endValue !== null;

  const gesture = useRef<InternalGestureRef>({
    dragging: null,
    startX: 0,
    containerWidth: 0,
  }).current;

  const thumbsContainerRef = useRef<HTMLDivElement>(null);
  const thumbStartInputRef = useRef<HTMLInputElement>(null);
  const thumbEndInputRef = useRef<HTMLInputElement>(null);

  const changeValue = (nextValue: InternalValueState, event: TouchEvent | ChangeEvent) => {
    if (disabled || isEqual(nextValue[0], nextValue[1])) {
      return;
    }

    if (multipleProp) {
      if (isMultipleValues(nextValue)) {
        !isControlled && setValue(nextValue);
        onChange && onChange(nextValue, event);
      }
    } else {
      !isControlled && setValue(nextValue[0]);
      onChange && onChange(nextValue[0], event);
    }
  };

  const handlePointerStart = (event: TouchEvent) => {
    if (!thumbsContainerRef.current) {
      return;
    }

    const { left: nextContainerX, width: nextContainerWidth } =
      thumbsContainerRef.current.getBoundingClientRect();

    if (!(event.originalEvent.target instanceof HTMLElement)) {
      return;
    }

    const foundDraggingType = getDraggingTypeByTargetDataset(event.originalEvent.target);
    const nextStartX = event.startX - nextContainerX;
    const nextValue = offsetXToScaledValue(nextStartX, nextContainerWidth, min, max, step);
    const nextDragging = determineSnapDirection(value, nextValue, foundDraggingType);

    gesture.dragging = nextDragging;
    gesture.containerWidth = nextContainerWidth;
    gesture.startX = nextStartX;

    const updatedInternalStateValue = updateInternalStateValue(
      value,
      nextValue,
      min,
      max,
      nextDragging,
    );

    const [nextStartValue, nextEndValue] = updatedInternalStateValue;
    if (
      thumbStartInputRef.current &&
      (foundDraggingType === 'start' || (nextStartValue !== startValue && nextEndValue === endValue))
    ) {
      thumbStartInputRef.current.focus();
      event.originalEvent.preventDefault();
    } else if (
      thumbEndInputRef.current &&
      (foundDraggingType === 'end' || (nextEndValue !== endValue && nextStartValue === startValue))
    ) {
      thumbEndInputRef.current.focus();
      event.originalEvent.preventDefault();
    }

    changeValue(updatedInternalStateValue, event);
    event.originalEvent.stopPropagation();
  };

  const handlePointerMove = (event: TouchEvent) => {
    const { startX, containerWidth, dragging } = gesture;

    const { shiftX = 0 } = event;
    const nextStartX = startX + shiftX;
    const nextValue = offsetXToScaledValue(nextStartX, containerWidth, min, max, step);

    changeValue(updateInternalStateValue(value, nextValue, min, max, dragging), event);

    event.originalEvent.stopPropagation();
    event.originalEvent.preventDefault();
  };

  const handlePointerEnd = (event: TouchEvent) => {
    gesture.dragging = null;
    event.originalEvent.stopPropagation();
  };

  const handleChangeByNativeInput = (event: ChangeEvent<HTMLInputElement>) => {
    changeValue(
      updateInternalStateByNativeChange(
        value,
        Number(event.target.value),
        getDraggingTypeByTargetDataset(event.target),
      ),
      event,
    );
  };

  const { aria, ...restPropsWithoutArea } = extractSliderAriaAttributes(restProps);
  const getInputProps = (isEndInput: boolean) => {
    const index = isEndInput ? 1 : 0;
    return {
      'data-type': isEndInput ? 'end' : 'start',
      step,
      min,
      value: isEndInput && multiple ? endValue : startValue,
      max: !isEndInput && multiple ? endValue : max,
      disabled,
      'aria-label': getAriaLabel ? getAriaLabel(index) : aria.ariaLabel,
      'aria-valuetext': getAriaValueText ? getAriaValueText(startValue, index) : aria.ariaValueText,
      'aria-labelledby': aria.ariaLabelledBy,
      onChange: handleChangeByNativeInput,
    };
  };

  const getStepsCoordinates = () => {
    if (step === 1) {
      return undefined;
    }

    const steps: Step[] = [];
    const stepsCount = Math.floor((max - min) / step);

    for (let i = 0; i <= stepsCount; i += 1) {
      const stepValue = min + i * step;

      const isPassed = multiple
        ? stepValue >= startValue && stepValue <= endValue
        : stepValue <= startValue;

      steps.push({
        isPassed,
        XCoordinate: toPercent(stepValue, min, max),
      });
    }

    return steps;
  };

  return {
    steps: getStepsCoordinates(),
    multiple,
    containerProps: restPropsWithoutArea,
    startValueInPercent: toPercent(startValue, min, max),
    endReversedValueInPercent: multiple ? toPercent(endValue, min, max) : 0,
    thumbsContainerRef,
    thumbStartInputRef,
    thumbEndInputRef,
    handlePointerStart,
    handlePointerMove,
    handlePointerEnd,
    getInputProps,
  };
};
