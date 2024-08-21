'use client';

import { AllHTMLAttributes, ElementType, ReactNode } from 'react';
import styles from './Chip.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface ChipProps extends AllHTMLAttributes<HTMLDivElement> {
  /** Defines the visual style of the chip, affecting its background, border, and shadow. */
  mode?: 'elevated' | 'mono' | 'outline';
  /** Content or component to be placed before the main text, typically an icon or avatar. */
  before?: ReactNode;
  /** Content or component to be placed after the main text, such as an icon indicating an action. */
  after?: ReactNode;
  /** The main text content of the chip. */
  children?: ReactNode;
  /** Specifies the HTML tag or React component used to render the Chip, defaulting to `div`. */
  Component?: ElementType;
}

const modeStyles = {
  elevated: styles['wrapper--elevated'],
  mono: styles['wrapper--mono'],
  outline: styles['wrapper--outline'],
};

/**
 * Renders a compact element representing an input, attribute, or action. Chips can include icons, text, or both,
 * and are used to trigger actions, input information, or represent a complex piece of information in a compact form.
 */
export const Chip = ({
  mode = 'elevated',
  before,
  after,
  className,
  children,
  Component = 'div',
  ...restProps
}: ChipProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component={Component}
      interactiveAnimation="opacity"
      className={classNames(styles.wrapper, modeStyles[mode], className)}
      {...restProps}
    >
      {hasReactNode(before) && <div className={styles.before}>{before}</div>}
      <Subheadline
        className={styles.text}
        level={platform === 'ios' ? '2' : '1'}
        weight="2"
      >
        {children}
      </Subheadline>
      {hasReactNode(after) && <div className={styles.after}>{after}</div>}
    </Tappable>
  );
};
