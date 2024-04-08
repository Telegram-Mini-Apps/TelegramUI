'use client';

import { HTMLAttributes, useContext, useRef } from 'react';
import styles from './AccordionContent.module.css';

import { classNames } from 'helpers/classNames';

import { AccordionContext } from 'components/Blocks/Accordion/AccordionContext';
import { calcMaxHeight } from './helpers/calcMaxHeight';

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

/**
 * Renders the content part of an accordion, leveraging context to control visibility and animation.
 * Utilizes `calcMaxHeight` for smooth height transitions during expand/collapse actions.
 */
export const AccordionContent = ({
  className,
  children,
  ...restProps
}: AccordionContentProps) => {
  const bodyRef = useRef(null);
  const { expanded, labelId, contentId } = useContext(AccordionContext);

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
        style={{
          maxHeight: calcMaxHeight(expanded, bodyRef.current),
        }}
      >
        {children}
      </div>
    </div>
  );
};
