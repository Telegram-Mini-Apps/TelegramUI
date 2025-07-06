import { forwardRef, HTMLAttributes } from 'react';
import styles from './PinInput.module.css';

import { Keys } from 'helpers/accessibility';
import { createChunks } from 'helpers/chunk';
import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Icon36Backspace } from 'icons/36/backspace';
import { Icon36FaceId } from 'icons/36/face_id';
import { Icon36FingerPrint } from 'icons/36/fingerprint';
import { Icon36ScanFace } from 'icons/36/scan_face';

import { PinInputButton } from 'components/Form/PinInput/components/PinInputButton/PinInputButton';
import { RootRenderer } from 'components/Service/RootRenderer/RootRenderer';
import { Headline } from 'components/Typography/Headline/Headline';
import { PinInputCell } from './components/PinInputCell/PinInputCell';
import { BiometricType, usePinInput } from './hooks/usePinInput';

export interface PinInputProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Text label displayed above the pin input cells. */
  label?: string;
  /** The number of pin input fields to display, with a minimum of 2. */
  pinCount?: number;
  /** The initial pin values to populate the input fields with. */
  value?: number[];
  /** Callback function triggered when the pin values change. */
  onChange?: (value: number[]) => void;
  /** Callback function triggered when the biometric authentication button is clicked. */
  onBiometricAuth?: () => void;
  /** Type of biometric authentication to display. If undefined, no biometric button will be shown. */
  biometricType?: BiometricType;
}

const PIN_MIN_COUNT = 2;

/**
 * Renders a set of input fields for entering pin codes with a virtual keypad for value entry and deletion.
 */
export const PinInput = forwardRef<HTMLElement, PinInputProps>(({
  label = 'Enter your pin',
  pinCount = 4,
  className,
  value: valueProp = [],
  onChange,
  onBiometricAuth,
  biometricType,
  ...restProps
}, ref) => {
  const platform = usePlatform();
  const normalizedPinCount = Math.max(PIN_MIN_COUNT, pinCount);

  const {
    setInputRefByIndex,
    value,
    handleButton,
    onElementClick,
    PINS,
  } = usePinInput({
    value: valueProp,
    onChange,
    onBiometricAuth,
    biometricType,
    pinCount: normalizedPinCount,
  });

  const getActionButtonComponent = (element: string | number, type?: BiometricType) => {
    if (typeof element === 'number') {
      return null;
    }

    if (element === Keys.BACKSPACE) {
      return Icon36Backspace;
    }

    switch (type) {
      case BiometricType.FACEID:
        return platform === 'ios' ? Icon36FaceId : Icon36ScanFace;
      case BiometricType.FINGERPRINT:
        return Icon36FingerPrint;
      default:
        return null;
    }
  };

  return (
    <RootRenderer>
      <section
        ref={ref}
        className={classNames(
          styles.wrapper,
          platform === 'ios' && styles['wrapper--ios'],
          className,
        )}
        {...restProps}
      >
        <header className={styles.header}>
          <Headline className={styles.title} weight="2">{label}</Headline>
          <div className={styles.cellsWrapper}>
            {Array.from({ length: normalizedPinCount }).map((_, index) => (
              <PinInputCell
                /* We can't use useId here, because if pinCount changes in runtime, it will crash because amount of renders will be different */
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                ref={(labelRef) => setInputRefByIndex(index, labelRef)}
                isTyped={index < value.length}
                value={value[index] || ''}
                onKeyDown={(event) => handleButton(index, event.key)}
                autoFocus={index === 0}
                tabIndex={-1}
                readOnly
              />
            ))}
          </div>
        </header>
        <div className={styles.buttonWrapper}>
          {createChunks(PINS, 3).map((rows) => (
            <div key={rows.toString()} className={classNames(
              styles.row,
              biometricType === undefined && styles['row--no-biometric'],
            )}>
              {rows.map((element) => {
                // Only get action button component for backspace or biometric auth
                const ActionButtonComponent = getActionButtonComponent(element, biometricType);

                return (
                  <PinInputButton
                    key={String(element)}
                    onClick={() => onElementClick(element)}
                  >
                    {ActionButtonComponent ? <ActionButtonComponent className={styles.actionButton} /> : element}
                  </PinInputButton>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </RootRenderer>
  );
});
