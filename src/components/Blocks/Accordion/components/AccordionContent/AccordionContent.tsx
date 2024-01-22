import { HTMLAttributes, useContext, useRef } from 'react';
import styles from './AccordionContent.module.css';

import { classNames } from 'helpers/classNames';

import { AccordionContext } from 'components/Blocks/Accordion/AccordionContext';
import { useAccordionStyles } from './hooks/useAccordionStyles';

export interface AccordionContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export const AccordionContent = ({
  className,
  children,
  ...restProps
}: AccordionContentProps) => {
  const bodyRef = useRef(null);
  const { expanded, labelId, contentId } = useContext(AccordionContext);
  const bodyStyles = useAccordionStyles(expanded, bodyRef);

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={labelId}
      aria-hidden={!expanded}
      className={classNames(styles.wrapper, className)}
      {...restProps}
    >
      <div
        ref={bodyRef}
        className={styles.body}
        style={bodyStyles}
      >
        {children}
      </div>
    </div>
  );
};
