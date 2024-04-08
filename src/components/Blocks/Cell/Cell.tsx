'use client';

import { ElementType, forwardRef, ReactElement, ReactNode } from 'react';
import styles from './Cell.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { BadgeProps } from 'components/Blocks/Badge/Badge';
import { Tappable, TappableProps } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { useTypographyCellComponents } from './hooks/useTypographyCellComponents';

export interface CellProps extends Omit<TappableProps, 'Component'> {
  /** Content displayed above the main content as a subheading */
  subhead?: ReactNode;
  /** Main content displayed as a header */
  children?: ReactNode;
  /** Content displayed alongside the header as a hint */
  hint?: ReactNode;
  /** A badge component to be displayed next to the header */
  titleBadge?: ReactElement<BadgeProps>;
  /** Content displayed below the header as a subtitle */
  subtitle?: ReactNode;
  /** Additional description displayed below the subtitle */
  description?: ReactNode;
  /** Content or elements to be displayed on the left side of the cell */
  before?: ReactNode;
  /** Content or elements to be displayed on the right side of the cell */
  after?: ReactNode;
  /** Custom component or HTML tag to be used as the root element of the cell, div by default */
  Component?: ElementType;
  /** Controls the hover state of the component externally, useful for keyboard navigation */
  hovered?: boolean;
  /** Allows for multiline content without truncation */
  multiline?: boolean;
}

/**
 * `Cell` component acts as a flexible and interactive container for various types of content,
 * enabling the creation of complex list items, form fields, and more. It leverages the `Tappable`
 * component for interaction and is designed to be flexible and extensible.
 */
export const Cell = forwardRef(({
  children,
  titleBadge,
  hint,
  subhead,
  subtitle,
  description,
  className,
  before,
  after,
  Component,
  hovered,
  multiline,
  ...restProps
}: CellProps, ref) => {
  const platform = usePlatform();
  const { Title, Description } = useTypographyCellComponents();

  const hasTitle = hasReactNode(children) || hasReactNode(hint) || hasReactNode(titleBadge);
  return (
    <Tappable
      ref={ref}
      Component={Component || 'div'}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        hovered && styles['wrapper--hovered'],
        multiline && styles['wrapper--multiline'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(before) && <div className={styles.before}>{before}</div>}
      <div className={styles.middle}>
        {hasReactNode(subhead) && (
          <Subheadline className={styles.subhead} level="2" weight="3">
            {subhead}
          </Subheadline>
        )}
        {hasTitle && (
          <Title className={styles.head}>
            {hasReactNode(children) && <span className={styles.title}>{children}</span>}
            {hasReactNode(hint) && <span className={styles.hint}>{hint}</span>}
            {hasReactNode(titleBadge) && titleBadge}
          </Title>
        )}
        {hasReactNode(subtitle) && (
          <Subheadline className={styles.subtitle} level="2" weight="3">
            {subtitle}
          </Subheadline>
        )}
        {hasReactNode(description) && (
          <Description className={styles.description}>
            {description}
          </Description>
        )}
      </div>
      {hasReactNode(after) && <div className={styles.after}>{after}</div>}
    </Tappable>
  );
});
