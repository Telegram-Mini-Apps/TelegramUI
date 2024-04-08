'use client';

import { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import styles from './Slider.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Touch, type TouchEvent } from 'components/Service/Touch/Touch';
import { SliderSteps } from './components/SliderSteps/SliderSteps';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { useSlider } from './hooks/useSlider';

export interface SliderBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Minimum allowed value. Defaults to 0. */
  min?: number;
  /** Maximum allowed value. Defaults to 100. */
  max?: number;
  /** Step value for each movement. Defaults to 1. */
  step?: number;
  /** Indicates whether the slider is disabled. */
  disabled?: boolean;
  /** Content to be rendered before the slider. */
  before?: ReactNode;
  /** Content to be rendered after the slider. */
  after?: ReactNode;
  /** Provides a way to generate dynamic aria-label based on the slider's thumb index. */
  getAriaLabel?: (index: number) => string;
  /** Provides a way to customize the aria-valuetext for more flexible text representation based on the slider's value. */
  getAriaValueText?: (value: number, index: number) => string;
}

export interface SliderNoMultipleProps extends SliderBaseProps {
  /** Enables single-thumb mode. */
  multiple?: false;
  /** The current value of the slider. */
  value?: number;
  /** Default value of the slider. */
  defaultValue?: number;
  /** Callback for when the slider value changes. */
  onChange?: (value: number, event: TouchEvent | ChangeEvent) => void;
}

export interface SliderMultipleProps extends SliderBaseProps {
  /** Enables multiple-thumb mode for range selection. */
  multiple: true;
  /** The current value of the slider, expecting a tuple for start and end values. */
  value?: [number, number];
  /** Default value of the slider, expecting a tuple for start and end values. */
  defaultValue?: [number, number];
  /** Callback for when the slider value changes. */
  onChange?: (value: [number, number], event: TouchEvent | ChangeEvent) => void;
}

export type SliderProps = SliderNoMultipleProps | SliderMultipleProps;

/**
 * Renders a slider input for selecting a value or range from a predefined interval. Supports single or multiple thumbs for range selection.
 * It leverages custom hooks for logic and state management and provides customization options for appearance and functionality.
 */
export const Slider = ({ className, disabled, before, after, ...restProps }: SliderProps) => {
  const platform = usePlatform();

  const {
    steps,
    multiple,
    containerProps,
    startValueInPercent,
    endReversedValueInPercent,
    thumbsContainerRef,
    thumbStartInputRef,
    thumbEndInputRef,
    handlePointerStart,
    handlePointerMove,
    handlePointerEnd,
    getInputProps,
  } = useSlider(restProps);

  return (
    <div className={classNames(
      styles.wrapper,
      platform === 'ios' && styles['wrapper--ios'],
      disabled && styles['wrapper--disabled'],
      className,
    )}>
      {hasReactNode(before) && (
        <div className={styles.before}>
          {before}
        </div>
      )}
      <Touch
        {...containerProps}
        className={styles.slider}
        onStart={disabled ? undefined : handlePointerStart}
        onMove={disabled ? undefined : handlePointerMove}
        onEnd={disabled ? undefined : handlePointerEnd}
      >
        <div className={styles.track}>
          {steps !== undefined && <SliderSteps steps={steps} />}
        </div>
        <div
          className={styles.trackFilled}
          style={multiple
            ? { left: `${startValueInPercent}%`, right: `${100 - endReversedValueInPercent}%` }
            : { width: `${startValueInPercent}%` }
          }
        />
        <div ref={thumbsContainerRef} className={styles.thumbs}>
          <SliderThumb
            data-type="start"
            ref={thumbStartInputRef}
            style={{
              left: `${startValueInPercent}%`,
              zIndex: multiple && startValueInPercent >= 50 ? 3 : undefined,
            }}
            inputProps={getInputProps(false)}
          />
          {multiple && (
            <SliderThumb
              data-type="end"
              ref={thumbEndInputRef}
              style={{ left: `${endReversedValueInPercent}%` }}
              inputProps={getInputProps(true)}
            />
          )}
        </div>
      </Touch>
      {hasReactNode(after) && (
        <div className={styles.after}>
          {after}
        </div>
      )}
    </div>
  );
};
