'use client';

import { createContext } from 'react';

export interface CardContextInterface {
  type: 'plain' | 'ambient';
}

export const CardContext = createContext<CardContextInterface>({
  type: 'plain',
});
