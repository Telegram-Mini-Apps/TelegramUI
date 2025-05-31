'use client';

import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';
import styles from './Spoiler.module.css';

import { classNames } from 'helpers/classNames';
import { callMultiple } from 'helpers/function';

export interface SpoilerProps extends HTMLAttributes<HTMLDivElement> {
  /** Controls the visibility of the content inside the spoiler. */
  visible?: boolean;
}

/**
 * Provides a way to hide or show content, such as details or spoilers, with a simple click.
 * The visibility state can be controlled externally via props or toggled by user interaction.
 */
export const Spoiler = ({
  visible = false,
  className,
  children,
  ...restProps
}: SpoilerProps) => {
  const [isVisible, setIsVisible] = useState(visible);

  useEffect(() => {
    // todo: find out if it is necessary
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setIsVisible(visible);
  }, [visible]);

  const toggle = () => setIsVisible(!isVisible);
  return (
    // It's a spoiler component, content inside is available for screen readers
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      {...restProps}
      className={classNames(
        styles.wrapper,
        isVisible && styles['wrapper--visible'],
        className
      )}
      onClick={callMultiple(toggle, restProps.onClick)}
      onKeyDown={callMultiple(toggle, restProps.onKeyDown)}
    >
      {children}
    </div>
  );
};
