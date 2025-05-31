'use client';

import type { RefObject } from 'react';
import { createContext } from 'react';

export interface AppRootContextInterface {
  platform?: 'base' | 'ios';
  appearance?: 'light' | 'dark';
  portalContainer?: RefObject<HTMLDivElement | null>;
  isRendered: boolean;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  isRendered: false,
});
