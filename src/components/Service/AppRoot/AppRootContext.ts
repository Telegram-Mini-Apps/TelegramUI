import { createContext, RefObject } from 'react';

import { Platform } from 'enums/Platform';

export interface AppRootContextInterface {
  platform?: Platform;
  appearance?: 'light' | 'dark';
  portalContainer?: RefObject<HTMLDivElement>;
  isRendered: boolean;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  isRendered: false,
});
