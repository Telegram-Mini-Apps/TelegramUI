import { AllHTMLAttributes, ReactNode } from 'react';
import styles from './Chip.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface ChipProps extends AllHTMLAttributes<HTMLDivElement> {
  /** Changes the appearance of the component */
  mode?: 'elevated' | 'mono' | 'outline';
  /** Content before the text */
  before?: ReactNode;
  /** Content after the text */
  after?: ReactNode;
  /** Text of the chip */
  children?: ReactNode;
}

const modeStyles = {
  elevated: styles['wrapper--elevated'],
  mono: styles['wrapper--mono'],
  outline: styles['wrapper--outline'],
};

export const Chip = ({
  mode = 'elevated',
  before,
  after,
  className,
  children,
  ...restProps
}: ChipProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="div"
      interactiveAnimation="opacity"
      className={classNames(
        styles.wrapper,
        modeStyles[mode],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(before) && (
        <div className={styles.before}>
          {before}
        </div>
      )}
      <Subheadline
        className={styles.text}
        level={platform === 'ios' ? '2' : '1'}
        weight="2"
      >
        {children}
      </Subheadline>
      {hasReactNode(after) && (
        <div className={styles.after}>
          {after}
        </div>
      )}
    </Tappable>
  );
};
