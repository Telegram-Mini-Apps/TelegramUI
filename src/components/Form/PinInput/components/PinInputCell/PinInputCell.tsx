import type { InputHTMLAttributes } from 'react';
import styles from './PinInputCell.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';
import type { RefProps } from 'types/ref';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface PinInputCellProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isTyped?: boolean;
}

export const PinInputCell = ({
  ref,
  isTyped,
  ...restProps
}: PinInputCellProps & RefProps<HTMLLabelElement>) => {
  const platform = usePlatform();
  const isIOS = platform === 'ios';

  return (
    <label
      ref={ref}
      className={classNames(
        styles.wrapper,
        isIOS && styles['wrapper--ios'],
        isTyped && styles['wrapper--typed']
      )}
    >
      <VisuallyHidden
        Component="input"
        type="number"
        maxLength={1}
        {...restProps}
      />
      {isTyped && !isIOS && <div className={styles.dot} />}
    </label>
  );
};
