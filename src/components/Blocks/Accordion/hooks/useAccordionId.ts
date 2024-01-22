import { useId } from 'react';

export const useAccordionId = (id?: string) => {
  const randomId = useId();

  const labelId = id ?? `Accordion${randomId}`;
  const contentId = `AccordionContent${id ?? randomId}`;

  return { labelId, contentId };
};
