import type { HTMLAttributes } from 'react';
import styles from './Card.module.css';

import { classNames } from 'helpers/classNames';
import { useObjectMemo } from 'hooks/useObjectMemo';
import type { RefProps } from 'types/ref';

import { CardCell } from './components/CardCell/CardCell';
import { CardChip } from './components/CardChip/CardChip';
import type { CardContextInterface } from './CardContext';
import { CardContext } from './CardContext';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** Defines the visual style of the card, influencing background, shadow, and border. */
  type?: CardContextInterface['type'];
}

/**
 * Serves as a container for card-styled UI elements, providing context for its child components.
 * It supports different visual styles and can encapsulate various content types.
 */
export const Card = ({
  ref,
  type = 'plain',
  className,
  children,
  ...restProps
}: CardProps & RefProps<HTMLDivElement>) => {
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
          className
        )}
        {...restProps}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
};

Card.Cell = CardCell;
Card.Chip = CardChip;
