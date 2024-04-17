'use client';

import { ElementType, forwardRef, ReactNode } from 'react';
import styles from './ButtonCell.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable, TappableProps } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface ButtonCellProps extends Omit<TappableProps, 'Component'> {
  /** Determines the button cell's visual theme, influencing color and style. */
  mode?: 'default' | 'destructive';
  /** Element or component displayed before the main content, adding visual context or functionality. */
  before?: ReactNode;
  /** Element or component displayed after the main content, typically indicating a possible action or outcome. */
  after?: ReactNode;
  /** Specifies the root element type for more semantic HTML structure or integration with navigation libraries. */
  Component?: ElementType;
  /** The content within the button cell, usually text. */
  children?: ReactNode;
}

/**
 * Renders an interactive cell component with optional leading and trailing elements. Designed to be flexible,
 * supporting various content structures and interaction models within UI designs.
 */
export const ButtonCell = forwardRef(({
  mode = 'default',
  before,
  after,
  className,
  children,
  Component,
  ...restProps
}: ButtonCellProps, ref) => {
  const platform = usePlatform();
  const Typography = platform === 'ios' ? Subheadline : Text;

  return (
    <Tappable
      ref={ref}
      Component={Component || 'button'}
      className={classNames(
        styles.wrapper,
        mode === 'destructive' && styles['wrapper--destructive'],
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(before) && before}
      {hasReactNode(children) && <Typography>{children}</Typography>}
      {hasReactNode(after) && after}
    </Tappable>
  );
});
