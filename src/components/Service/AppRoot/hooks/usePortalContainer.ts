'use client';

import { useContext, useRef } from 'react';

import { AppRootContext, AppRootContextInterface } from '../AppRootContext';

export const usePortalContainer = (portalContainer?: AppRootContextInterface['portalContainer']): NonNullable<AppRootContextInterface['portalContainer']> => {
  if (portalContainer !== undefined) {
    return portalContainer;
  }

  const appContext = useContext(AppRootContext);
  if (appContext.isRendered && appContext.portalContainer !== undefined) {
    return appContext.portalContainer;
  }

  return useRef(null);
};
