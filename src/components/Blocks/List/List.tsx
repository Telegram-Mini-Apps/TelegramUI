import { HTMLAttributes } from 'react';
import styles from './List.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Renders a container for list items, applying platform-specific styles for consistency across different operating systems.
 * This component serves as a foundational element for creating lists in a user interface.
 */
export const List = ({ className, children, ...restProps }: ListProps) => {
  const platform = usePlatform();

  return (
    <div
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
