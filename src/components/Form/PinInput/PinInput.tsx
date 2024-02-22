import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import styles from './PinInput.module.css';

import { Keys } from 'helpers/accessibility';
import { createChunks } from 'helpers/chunk';
import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Icon36Backspace } from 'icons/36/backspace';

import { PinInputButton } from 'components/Form/PinInput/components/PinInputButton/PinInputButton';
import { RootRenderer } from 'components/Service/RootRenderer/RootRenderer';
import { Headline } from 'components/Typography/Headline/Headline';
import { PinInputCell } from './components/PinInputCell/PinInputCell';
import { AVAILABLE_PINS, usePinInput } from './hooks/usePinInput';

export interface PinInputProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Pin input label */
  label?: string;
  /** Number of pin input fields, minimum 2 */
  pinCount?: number;
  /** Initial value */
  value?: number[];
  /** Callback on pin input change */
  onChange?: (value: number[]) => void;
}

const PIN_MIN_COUNT = 2;

export const PinInput = forwardRef<HTMLElement, PinInputProps>(({
  label = 'Enter your pin',
  pinCount = 4,
  className,
  value: valueProp = [],
  onChange,
  ...restProps
}, ref) => {
  const platform = usePlatform();
  const normalizedPinCount = Math.max(PIN_MIN_COUNT, pinCount);

  const {
    handleClickValue,
    handleClickBackspace,
    setInputRefByIndex,
    value,
    handleButton,
  } = usePinInput({
    value: valueProp,
    onChange,
    pinCount: normalizedPinCount,
  });

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
          {createChunks(AVAILABLE_PINS, 3).map((rows) => (
            <div key={rows.toString()} className={styles.row}>
              {rows.map((element) => {
                let children: ReactNode = element;
                let clickFunction = () => handleClickValue(Number(element));

                if (element === Keys.BACKSPACE) {
                  clickFunction = () => handleClickBackspace();
                  children = <Icon36Backspace className={styles.backspaceIcon} />;
                }

                return (
                  <PinInputButton key={element} onClick={clickFunction}>
                    {children}
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
