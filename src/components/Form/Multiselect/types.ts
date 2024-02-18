import { ReactElement } from 'react';

export type MultiselectOptionValue = string | number;
export type MultiselectOptionLabel = ReactElement | string | number;

export type MultiselectOption = {
  value: MultiselectOptionValue;
  label: MultiselectOptionLabel;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [index: string]: any;
};
