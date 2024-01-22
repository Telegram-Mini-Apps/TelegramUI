import { ReactNode } from 'react';

import { useObjectMemo } from 'hooks/useObjectMemo';

import { AccordionContent } from './components/AccordionContent/AccordionContent';
import { AccordionSummary } from './components/AccordionSummary/AccordionSummary';
import { useAccordionId } from './hooks/useAccordionId';
import { AccordionContext } from './AccordionContext';

export interface AccordionProps {
  /** Prop for a11y: ID of the accordion. If not specified, a random ID will be generated and passed to Summary and Content */
  id?: string;
  /** Is the accordion expanded */
  expanded: boolean;
  /** Callback for expanding/collapsing the accordion */
  onChange: (expanded: boolean) => void;
  /** Pass Accordion.Summary and Accordion.Content as children */
  children: ReactNode;
}

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
