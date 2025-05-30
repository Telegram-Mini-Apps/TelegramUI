import { useContext } from 'react';

import type { AppRootContextInterface } from '../AppRootContext';
import { AppRootContext } from '../AppRootContext';
import { getInitialPlatform } from './helpers/getInitialPlatform';

export const usePlatform = (platform?: AppRootContextInterface['platform']): NonNullable<AppRootContextInterface['platform']> => {
  if (platform !== undefined) {
    return platform;
  }

  const appContext = useContext(AppRootContext);
  if (appContext.isRendered && appContext.platform !== undefined) {
    return appContext.platform;
  }

  return getInitialPlatform();
};
