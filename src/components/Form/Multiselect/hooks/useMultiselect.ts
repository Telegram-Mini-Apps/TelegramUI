'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import { isEqual } from 'helpers/equal';
import { useEnhancedEffect } from 'hooks/useEnhancedEffect';

import { MultiselectOption } from 'components/Form/Multiselect/types';
import { defaultFilterFn, FilterFn } from './helpers/filter';
import { transformOptions } from './helpers/transformOptions';
import { DEFAULT_EMPTY_TEXT, DEFAULT_SELECTED_BEHAVIOR } from './constants';
import { useMultiselectInput, type UseMultiselectInputProps } from './useMultiselectInput';

export interface UseMultiselectProps extends UseMultiselectInputProps {
  /** Array of options available for selection. */
  options?: MultiselectOption[];
  /**
   * Enables the creation of new options that are not in the initial list.
   * - `true` allows adding by pressing Enter.
   * - A `string` value also adds a button with the provided text to the dropdown for creating options.
   */
  creatable?: boolean | string;
  /** Text displayed when no options are available or match the filter criteria. */
  emptyText?: string;
  /** Determines how selected options are treated: either hidden from the list or highlighted within it. */
  selectedBehavior?: 'hide' | 'highlight';
  /** Custom function to filter options based on the input value. */
  filterFn?: false | FilterFn;
}

/**
 * Hook to manage the state and interactions of a multiselect component.
 * It encapsulates logic for option selection, input change handling, dropdown visibility, and focused option management.
 */
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
