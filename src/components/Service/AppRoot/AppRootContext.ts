'use client';

import { createContext, RefObject } from 'react';

export interface AppRootContextInterface {
  platform?: 'base' | 'ios';
  appearance?: 'light' | 'dark';
  portalContainer?: RefObject<HTMLDivElement>;
  isRendered: boolean;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  isRendered: false,
});
