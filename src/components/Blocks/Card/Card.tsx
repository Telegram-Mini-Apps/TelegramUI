import { forwardRef, ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from 'react';
import styles from './Card.module.css';

import { classNames } from 'helpers/classNames';
import { useObjectMemo } from 'hooks/useObjectMemo';

import { CardCell } from './components/CardCell/CardCell';
import { CardChip } from './components/CardChip/CardChip';
import { CardContext, CardContextInterface } from './CardContext';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Defines the visual style of the card, influencing background, shadow, and border. */
  type?: CardContextInterface['type'];
}

type CardWithComponents = ForwardRefExoticComponent<CardProps & RefAttributes<HTMLDivElement>> & {
  Cell: typeof CardCell;
  Chip: typeof CardChip;
};

/**
 * Serves as a container for card-styled UI elements, providing context for its child components.
 * It supports different visual styles and can encapsulate various content types.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(({
  type = 'plain',
  className,
  children,
  ...restProps
}, ref) => {
  const contextValue = useObjectMemo({
    type,
  });

  return (
    <CardContext.Provider value={contextValue}>
      <article
        ref={ref}
        className={classNames(
          styles.wrapper,
          type === 'ambient' && styles['wrapper--ambient'],
          className,
        )}
        {...restProps}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
}) as CardWithComponents;

Card.Cell = CardCell;
Card.Chip = CardChip;
