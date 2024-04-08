'use client';

import { ChangeEvent, useCallback, useRef, useState } from 'react';

import { useCustomEnsuredControl } from 'hooks/useEnsureControl';

import { MultiselectOption, MultiselectOptionValue } from '../types';
import { getNewOptionData } from './helpers/getNewOptionData';
import { isValueLikeOption } from './helpers/isValueLikeOption';
import { simulateReactInput } from './helpers/simulateReactInput';

export interface UseMultiselectInputProps {
  /** If true, the multiselect is considered disabled and cannot be interacted with. */
  disabled?: boolean;
  /** The currently selected options. */
  value: MultiselectOption[];
  /** The default value(s) for the multiselect if `value` is uncontrolled. */
  defaultValue?: MultiselectOption[];
  /** Callback fired when the selected options change. */
  onChange?: (options: MultiselectOption[]) => void;
  /** The current value of the input field, for controlling component behavior. */
  inputValue?: string;
  /** Callback fired when the input value changes. */
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Hook for managing the state and interactions of a multiselect input component.
 * It handles adding and removing options, input changes, and input clearing functionalities.
 */
export const useMultiselectInput = ({
  disabled,
  value: valueProp,
  onChange,
  defaultValue = [],
  inputValue: inputValueProp = '',
  onInputChange,
}: UseMultiselectInputProps) => {
  const [value, setValue] = useCustomEnsuredControl({
    value: valueProp,
    disabled,
    defaultValue,
    onChange,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(inputValueProp);

  const toggleOption = useCallback((nextValueProp: MultiselectOption | MultiselectOptionValue, isNewValue: boolean) => {
    let valueForChange = valueProp;

    setValue((prevValue) => {
      const isLikeOption = isValueLikeOption(nextValueProp);
      const resolvedOption = isLikeOption
        ? getNewOptionData(nextValueProp.value, nextValueProp.label)
        : getNewOptionData(nextValueProp, typeof nextValueProp === 'string' ? nextValueProp : '');
      const nextValue = prevValue.filter((option) => resolvedOption.value !== option.value);

      if (isNewValue) {
        nextValue.push(isLikeOption ? {
          ...nextValueProp,
          ...resolvedOption,
        } : resolvedOption);
      }

      valueForChange = nextValue;
      return nextValue;
    });

    onChange?.(valueForChange);
  }, [setValue]);

  const clearInput = useCallback(() => {
    simulateReactInput(inputRef.current!, '');
  }, [inputRef]);

  const addOption = useCallback(
    (newValue: MultiselectOption | MultiselectOptionValue) => toggleOption(newValue, true),
    [toggleOption],
  );

  const removeOption = useCallback((newValue: MultiselectOption | MultiselectOptionValue) => {
    toggleOption(newValue, false);
  }, [toggleOption]);

  const addOptionFromInput = useCallback((inputValueToAdd: string) => {
    const label = inputValueToAdd.trim();

    if (!label) {
      return;
    }

    addOption(label);
    clearInput();
  }, [addOption, clearInput]);

  const inputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
    onInputChange?.(event);
  }, [onInputChange]);

  return {
    value,
    addOption,
    addOptionFromInput,
    removeOption,

    inputRef,
    inputValue,
    onInputChange: inputChange,
    clearInput,
  };
};
