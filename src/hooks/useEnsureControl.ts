/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { ChangeEvent, Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';

import { isFunction } from 'helpers/fuctions';
import { useEnhancedEffect } from 'hooks/useEnhancedEffect';

export interface UseCustomEnsuredControlProps<V> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?(this: void, v: V): any;
}

export function useCustomEnsuredControl<V = any>({
  value,
  defaultValue,
  disabled,
  onChange: onChangeProp,
}: UseCustomEnsuredControlProps<V>): [V, Dispatch<SetStateAction<V>>] {
  const isControlled = value !== undefined;
  const [localValue, setLocalValue] = useState(defaultValue);
  const preservedControlledValueRef = useRef<V>();

  useEnhancedEffect(() => {
    preservedControlledValueRef.current = value;
  });

  const onChange = useCallback((nextValue: V | ((prevValue: any) => V)) => {
    if (disabled) {
      return;
    }

    if (isFunction(nextValue)) {
      if (!isControlled) {
        setLocalValue((prevValue) => {
          const resolvedValue = nextValue(prevValue);
          if (onChangeProp) {
            onChangeProp(resolvedValue);
          }
          return resolvedValue;
        });
      } else if (onChangeProp) {
        const resolvedValue = nextValue(preservedControlledValueRef.current);
        onChangeProp(resolvedValue);
      }

      return;
    }

    onChangeProp && onChangeProp(nextValue);
    !isControlled && setLocalValue(nextValue);
  }, [disabled, isControlled, onChangeProp]);

  return [isControlled ? value : localValue, onChange];
}

export interface UseEnsuredControlProps<V, E extends ChangeEvent<any>> {
  value?: V;
  defaultValue: V;
  disabled?: boolean | undefined;
  onChange?(this: void, e: E): any;
}

export function useEnsuredControl<V, E extends ChangeEvent<any>>({
  onChange: onChangeProp,
  disabled,
  ...props
}: UseEnsuredControlProps<V, E>): [V, (e: E) => any] {
  const [value, onChangeValue] = useCustomEnsuredControl(props);

  const onChange = useCallback(
    (e: E) => {
      if (disabled) {
        return;
      }

      onChangeValue(e.target.value);
      onChangeProp && onChangeProp(e);
    },
    [onChangeValue, onChangeProp, disabled],
  );

  return [value, onChange];
}
