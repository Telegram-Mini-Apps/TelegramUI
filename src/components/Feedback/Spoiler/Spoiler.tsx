'use client';

import { HTMLAttributes, useEffect, useState } from 'react';
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
    setIsVisible(visible);
  }, [visible]);

  const toggle = () => setIsVisible(!isVisible);
  return (
    // It's a spoiler component, content inside is available for screen readers
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      {...restProps}
      className={classNames(
        styles.wrapper,
        isVisible && styles['wrapper--visible'],
        className,
      )}
      onClick={callMultiple(toggle, restProps.onClick)}
      onKeyDown={callMultiple(toggle, restProps.onKeyDown)}
    >
      {children}
    </div>
  );
};
