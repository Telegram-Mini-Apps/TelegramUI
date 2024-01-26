import { AriaAttributes } from 'react';

import type { InternalDraggingType } from '../types';

export const extractSliderAriaAttributes = <T extends AriaAttributes>(
  restProps: T,
) => {
  const {
    'aria-label': ariaLabel,
    'aria-valuetext': ariaValueText,
    'aria-labelledby': ariaLabelledBy,
    ...restPropsWithoutAria
  } = restProps;

  return {
    aria: {
      ariaLabel,
      ariaValueText,
      ariaLabelledBy,
    },
    ...restPropsWithoutAria,
  };
};

export const getDraggingTypeByTargetDataset = <T extends (EventTarget & HTMLElement) | null>(
  target: T,
) => {
  if (!target) {
    return null;
  }

  if (['start', 'end'].includes(target.dataset.type || '')) {
    return target.dataset.type as InternalDraggingType;
  }

  return null;
};

