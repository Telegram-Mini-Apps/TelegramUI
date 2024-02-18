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
  /** Content displayed on the left side */
  before?: ReactNode;
  /** Content displayed on the right side */
  after?: ReactNode;
  /** Content displayed as a title */
  children?: ReactNode;
  /** Content displayed under the title (children) */
  description?: ReactNode;
  /** Content displayed under the description */
  link?: ReactElement<LinkProps>;
  /** After {duration}ms it will be hidden */
  duration?: number;
  /** Callback function to unmount component from dom */
  onClose: () => void;
}

const TRANSITION_FINISH_DURATION = 320;

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
