'use client';

import { HTMLAttributes, ReactElement, ReactNode, useEffect, useState } from 'react';
import styles from './Snackbar.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';
import { useTimeout } from 'hooks/useTimeout';

import { LinkProps } from 'components/Navigation/Link/Link';
import { RootRenderer } from 'components/Service/RootRenderer/RootRenderer';
import { Caption } from 'components/Typography/Caption/Caption';
import { SnackbarButton } from './components/SnackbarButton/SnackbarButton';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /** Element or component to be displayed on the left side of the snackbar. */
  before?: ReactNode;
  /** Element or component to be displayed on the right side of the snackbar. */
  after?: ReactNode;
  /** The main content of the snackbar, typically text or a message. */
  children?: ReactNode;
  /** Additional content displayed below the main message. */
  description?: ReactNode;
  /** A link component to be included in the snackbar for user interaction. */
  link?: ReactElement<LinkProps>;
  /** The duration in milliseconds after which the snackbar will automatically close. */
  duration?: number;
  /** Callback function invoked when the snackbar is closed. */
  onClose: () => void;
}

const TRANSITION_FINISH_DURATION = 320;

/**
 * Displays a brief message at the bottom of the screen, which can contain actions and other content.
 * It automatically dismisses after a set duration, providing feedback or interaction prompts to users.
 */
export const Snackbar = ({
  before,
  after,
  description,
  link,
  children,
  className,
  duration = 4000,
  onClose,
  ...restProps
}: SnackbarProps) => {
  const platform = usePlatform();
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(onClose, TRANSITION_FINISH_DURATION);
  };

  const closeTimeout = useTimeout(close, duration);
  useEffect(() => closeTimeout.set(), [closeTimeout]);

  return (
    <RootRenderer>
      <div
        className={classNames(
          styles.wrapper,
          platform === 'ios' && styles['wrapper--ios'],
          closing && styles['wrapper--closing'],
          className,
        )}
        {...restProps}
      >
        <div className={styles.body}>
          {hasReactNode(before) && (
            <div className={styles.before}>
              {before}
            </div>
          )}
          <div className={styles.middle}>
            {hasReactNode(children) && <Caption weight="2">{children}</Caption>}
            {hasReactNode(description) && <Caption>{description}</Caption>}
            {hasReactNode(link) && <Caption>{link}</Caption>}
          </div>
          {hasReactNode(after) && (
            <div className={styles.after}>
              {after}
            </div>
          )}
        </div>
      </div>
    </RootRenderer>
  );
};

Snackbar.Button = SnackbarButton;
