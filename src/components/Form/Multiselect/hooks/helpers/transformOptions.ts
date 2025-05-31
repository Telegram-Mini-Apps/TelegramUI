import { isServicePreset } from 'components/Form/Multiselect/hooks/constants';
import { getNewOptionData } from 'components/Form/Multiselect/hooks/helpers/getNewOptionData';
import type { UseMultiselectProps } from 'components/Form/Multiselect/hooks/useMultiselect';
import type { MultiselectOption } from 'components/Form/Multiselect/types';

export const transformOptions = ({
  value,
  inputValue = '',
  emptyText,
  creatable = false,
  filterFn,
  options: optionsProp,
  selectedBehavior,
}: Required<Pick<UseMultiselectProps, 'value' | 'options' | 'emptyText'>> &
  Pick<
    UseMultiselectProps,
    | 'inputValue'
    | 'emptyText'
    | 'creatable'
    | 'filterFn'
    | 'options'
    | 'selectedBehavior'
  >): MultiselectOption[] => {
  const filteredOptionsProp = filterFn
    ? optionsProp.filter((option) => filterFn(inputValue, option))
    : optionsProp;

  if (filteredOptionsProp.length === 0) {
    if (inputValue !== '' && typeof creatable === 'string') {
      return [
        {
          ...getNewOptionData('', ''),
          actionText: creatable,
        },
      ];
    }

    return [
      {
        ...getNewOptionData('', ''),
        placeholder: emptyText,
      },
    ];
  }

  if (selectedBehavior === 'hide') {
    const selected = new Set(value.map((item) => item.value));
    return filteredOptionsProp.filter((item) => {
      return isServicePreset(item) ? false : !selected.has(item.value);
    });
  }

  return filteredOptionsProp;
};
