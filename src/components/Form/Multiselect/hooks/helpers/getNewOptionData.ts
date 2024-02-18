import { MultiselectOption, MultiselectOptionLabel, MultiselectOptionValue } from 'components/Form/Multiselect/types';

export const getNewOptionData = (
  value: MultiselectOptionValue,
  label: MultiselectOptionLabel,
): MultiselectOption => ({
  value,
  label,
});

