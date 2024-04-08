'use client';

import { ReactNode } from 'react';

import { useObjectMemo } from 'hooks/useObjectMemo';

import { AccordionContent } from './components/AccordionContent/AccordionContent';
import { AccordionSummary } from './components/AccordionSummary/AccordionSummary';
import { useAccordionId } from './hooks/useAccordionId';
import { AccordionContext } from './AccordionContext';

export interface AccordionProps {
  /**
   * Optional ID for the accordion element, enhancing accessibility (a11y) by associating the accordion
   * summary and content. If not provided, a unique ID will be generated automatically.
   * This ID is crucial for screen readers and other assistive technologies to understand the
   * relationship between the accordion header and content.
   */
  id?: string;
  /** Determines whether the accordion is currently expanded or collapsed. */
  expanded: boolean;
  /** Callback function that is called when the accordion's state changes, such as when it is opened or closed. */
  onChange: (expanded: boolean) => void;
  /**
   * Children of the Accordion component. Pass `Accordion.Summary` and
   * `Accordion.Content` as children to create a functional accordion structure.
   */
  children: ReactNode;
}

/**
 * This component serves as a container for an accordion item, comprising a summary and
 * content sections. It uses the Context API to manage its state and to allow its children
 * (`Accordion.Summary` and `Accordion.Content`) to access shared state and callbacks.
 */
export const Accordion = ({
  id,
  expanded,
  onChange,
  children,
}: AccordionProps) => {
  const { labelId, contentId } = useAccordionId(id);

  const context = useObjectMemo({
    labelId,
    contentId,
    expanded,
    onChange,
  });

  return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
};

Accordion.Summary = AccordionSummary;
Accordion.Content = AccordionContent;
