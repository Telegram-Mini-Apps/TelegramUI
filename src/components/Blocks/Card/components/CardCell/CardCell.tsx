import { useContext } from 'react';
import styles from './CardCell.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { Cell, CellProps } from 'components/Blocks/Cell/Cell';
import { CardContext } from '../../CardContext';

interface CardCellProps extends CellProps {}

export const CardCell = ({
  children,
  subtitle,
  className,
  ...restProps
}: CardCellProps) => {
  const cardContext = useContext(CardContext);

  return (
    <Cell
      className={classNames(
        styles.wrapper,
        cardContext.type === 'ambient' && styles['wrapper--ambient'],
        className,
      )}
      subtitle={hasReactNode(subtitle) && <span className={styles.subtitle}>{subtitle}</span>}
      {...restProps}
    >
      {hasReactNode(children) && <span className={styles.header}>{children}</span>}
    </Cell>
  );
};
