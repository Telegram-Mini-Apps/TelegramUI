import { createContext } from 'react';

export interface AccordionContextProps {
  labelId: string;
  contentId: string;
  expanded: boolean;
  onChange: (expanded: boolean) => void;
}

export const AccordionContext = createContext<AccordionContextProps>({
  labelId: '',
  contentId: '',
  expanded: false,
  onChange: () => {},
});
