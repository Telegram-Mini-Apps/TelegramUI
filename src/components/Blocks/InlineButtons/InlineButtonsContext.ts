import { createContext } from 'react';

export interface InlineButtonsContextProps {
  mode?: 'plain' | 'bezeled' | 'gray';
}

export const InlineButtonsContext = createContext<InlineButtonsContextProps>({});
