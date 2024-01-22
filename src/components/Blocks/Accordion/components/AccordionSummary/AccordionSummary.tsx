import { useContext } from 'react';
import styles from './AccordionSummary.module.css';

import { classNames } from 'helpers/classNames';
import { callMultiple } from 'helpers/function';

import { Icon24ChevronDown } from 'icons/24/chevron_down';

import { AccordionContext } from 'components/Blocks/Accordion/AccordionContext';
import { Cell, CellProps } from 'components/Blocks/Cell/Cell';

export interface AccordionSummaryProps extends CellProps {}

export const AccordionSummary = ({
  after,
  before,
  onClick,
  children,
  ...restProps
}: AccordionSummaryProps) => {
  const { expanded, labelId, contentId, onChange } = useContext(AccordionContext);
  const toggle = () => onChange(!expanded);

  return (
    <Cell
      id={labelId}
      aria-expanded={expanded}
      aria-controls={contentId}
      onClick={callMultiple(toggle, onClick)}
      after={after || (
        <Icon24ChevronDown
          className={classNames(
            styles.chevron,
            expanded && styles['chevron--expanded'],
          )}
        />
      )}
      {...restProps}
    >
      {children}
    </Cell>
  );
};
