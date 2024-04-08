'use client';

import { useContext } from 'react';

import { AppRootContext } from 'components/Service/AppRoot/AppRootContext';

export const useAppRootContext = () => {
  const appRootContext = useContext(AppRootContext);

  if (!appRootContext.isRendered) {
    throw new Error('[TGUI] Wrap your app with <AppRoot> component');
  }

  return appRootContext;
};
