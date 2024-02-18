import { MultiselectOption, MultiselectOptionValue } from 'components/Form/Multiselect/types';

export const isValueLikeOption = <O extends MultiselectOption>(value: O | MultiselectOptionValue): value is O =>
  typeof value === 'object' && 'value' in value;
