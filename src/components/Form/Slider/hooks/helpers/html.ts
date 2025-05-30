import type { AriaAttributes } from 'react';

import type { InternalDraggingType } from '../types';

export const extractSliderAriaAttributes = <T extends AriaAttributes>(
  restProps: T
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
  target: T
) => {
  if (!target) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/dot-notation
  if (['start', 'end'].includes(target.dataset['type'] || '')) {
    // eslint-disable-next-line @typescript-eslint/dot-notation
    return target.dataset['type'] as InternalDraggingType;
  }

  return null;
};
