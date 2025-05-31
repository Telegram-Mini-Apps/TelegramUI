'use client';

import { useContext, useRef } from 'react';

import type { AppRootContextInterface } from '../AppRootContext';
import { AppRootContext } from '../AppRootContext';

export const usePortalContainer = (
  portalContainer?: AppRootContextInterface['portalContainer']
): NonNullable<AppRootContextInterface['portalContainer']> => {
  const appContext = useContext(AppRootContext);
  const appRef = useRef(null);

  if (portalContainer !== undefined) {
    return portalContainer;
  }

  if (appContext.isRendered && appContext.portalContainer !== undefined) {
    return appContext.portalContainer;
  }

  return appRef;
};
