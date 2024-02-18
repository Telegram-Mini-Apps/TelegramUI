import { ChangeEvent, useCallback, useState } from 'react';

import { isEqual } from 'helpers/equal';
import { useEnhancedEffect } from 'hooks/useEnhancedEffect';

import { MultiselectOption } from 'components/Form/Multiselect/types';
import { defaultFilterFn, FilterFn } from './helpers/filter';
import { transformOptions } from './helpers/transformOptions';
import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR } from './constants';
import { useMultiselectInput, type UseMultiselectInputProps } from './useMultiselectInput';

export interface UseMultiselectProps extends UseMultiselectInputProps {
  /** Options to select */
  options?: MultiselectOption[];
  /**
   * The ability to create chips that are not in the list:
   * - `true` - adding by pressing Enter;
   * - `<text>` - in addition to the ability to add via Enter, a button with text will appear in the menu item.
   * The text for the item that creates chips when clicked also determines whether this item will be shown
   */
  creatable?: boolean | string;
  /** Text that is shown if the list of options is empty */
  emptyText?: string;
  /** Should selected options be hidden or highlighted */
  selectedBehavior?: 'hide' | 'highlight';
  /** Function to filter options */
  filterFn?: false | FilterFn;
}

export const useMultiselect = ({
  // Common props
  disabled,

  // Options props
  value: valueProp,
  defaultValue,
  onChange,

  // Input props
  inputValue: inputValueProp = '',
  onInputChange: onInputChangeProp,

  // Dropdown props
  creatable = false,
  emptyText = DEFAULT_EMPTY_TEXT,
  filterFn = defaultFilterFn,
  selectedBehavior = DEFAULT_SELECTED_BEHAVIOR,
  options: optionsProp = [],
}: UseMultiselectProps) => {
  const { value, inputValue, onInputChange, ...restMultiselectProps } = useMultiselectInput({
    // Option props
    value: valueProp,
    defaultValue,
    onChange,

    // Input Props
    inputValue: inputValueProp,
    onInputChange: onInputChangeProp,

    // Other Props
    disabled,
  });

  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState<MultiselectOption[]>(() =>
    opened
      ? transformOptions({
        value,
        inputValue,
        emptyText,
        creatable,
        filterFn,
        options: optionsProp,
        selectedBehavior,
      })
      : [],
  );

  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(0);
  const [focusedOption, setFocusedOption] = useState<MultiselectOption | null>(null);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event);

    if (!opened) {
      return;
    }

    setOpened(true);
    setFocusedOptionIndex(0);
  }, [onInputChange, opened]);

  useEnhancedEffect(() => {
    if (!opened) {
      return;
    }

    setOptions((prevOptions) => {
      const nextOptions = transformOptions({
        value,
        inputValue,
        emptyText,
        creatable,
        filterFn,
        options: optionsProp,
        selectedBehavior,
      });

      if (isEqual(prevOptions, nextOptions)) {
        return prevOptions;
      }

      return nextOptions;
    });
  }, [
    opened,
    value,
    inputValue,
    optionsProp,
    creatable,
    selectedBehavior,
    filterFn,
  ]);

  return {
    ...restMultiselectProps,

    // Options props
    value,

    // Input props
    inputValue,
    onInputChange: handleInputChange,

    // States for dropdown
    options,
    opened,
    setOpened,
    focusedOption,
    focusedOptionIndex,
    setFocusedOption,
    setFocusedOptionIndex,
  };
};
