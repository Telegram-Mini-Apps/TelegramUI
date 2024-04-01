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
  /** Content displayed above the header */
  subhead?: ReactNode;
  /** Content displayed as a header */
  children?: ReactNode;
  /** Content displayed as a hint on the same position as header */
  hint?: ReactNode;
  /** Content displayed as a badge on the same position as header */
  titleBadge?: ReactElement<BadgeProps>;
  /** Content displayed under the header */
  subtitle?: ReactNode;
  /** Content displayed under the subtitle */
  description?: ReactNode;
  /** Content displayed on the left side */
  before?: ReactNode;
  /** Content displayed on the right side */
  after?: ReactNode;
  /** Component root tag, div by default, useful for cells witch used as a form */
  Component?: ElementType;
  /** Controls hover state outside of component, can be useful for elements with keyboard focus */
  hovered?: boolean;
  /** Removes default white-space value from the cell */
  multiline?: boolean;
}

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
