import { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import styles from './Slider.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react';
import { usePlatform } from 'hooks/usePlatform';

import { Touch, type TouchEvent } from 'components/Service/Touch/Touch';
import { SliderSteps } from './components/SliderSteps/SliderSteps';
import { SliderThumb } from './components/SliderThumb/SliderThumb';
import { useSlider } from './hooks/useSlider';

export interface SliderBaseProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Minimum allowed value @default 0 */
  min?: number;
  /** Maximum allowed value @default 100 */
  max?: number;
  /** Step value for each movement @default 1 */
  step?: number;
  /** Indicates whether the slider is disabled */
  disabled?: boolean;
  /** Content before the Slider */
  before?: ReactNode;
  /** Content after the Slider */
  after?: ReactNode;
  /**
   * Similar to `aria-label`, but takes the current slider's index as input.
   * Allows providing different labels based on the index. Overrides `aria-label`
   */
  getAriaLabel?: (index: number) => string;
  /**
   * Unlike `aria-valuetext`, allows more flexible formatting of text based on the slider's value.
   * Useful when using the component in an uncontrolled manner. Overrides `aria-valuetext`
   */
  getAriaValueText?: (value: number, index: number) => string;
}

export interface SliderNoMultipleProps extends SliderBaseProps {
  /** Indicates if multiple thumbs are allowed */
  multiple?: false;
  /** Current value of the slider */
  value?: number;
  /** Default value for the slider */
  defaultValue?: number;
  /** Event handler for value changes. */
  onChange?: (value: number, event: TouchEvent | ChangeEvent) => void;
}

export interface SliderMultipleProps extends SliderBaseProps {
  multiple: true;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number], event: TouchEvent | ChangeEvent) => void;
}

export type SliderProps = SliderNoMultipleProps | SliderMultipleProps;

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
