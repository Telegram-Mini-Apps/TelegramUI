import { createContext, RefObject } from 'react';

import { Platform } from 'enums/Platform';
import { getTelegramData } from 'helpers/telegram';

import { getInitialPlatform } from './helpers/getInitialPlatform';

export interface AppRootContextInterface {
  platform?: Platform;
  appearance?: 'light' | 'dark';
  portalContainer?: RefObject<HTMLElement>;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  platform: getInitialPlatform(),
  appearance: getTelegramData()?.colorScheme || 'light',
});
