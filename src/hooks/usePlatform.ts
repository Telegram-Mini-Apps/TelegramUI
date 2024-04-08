'use client';

import { useAppRootContext } from 'hooks/useAppRootContext';

import { AppRootContextInterface } from 'components/Service/AppRoot/AppRootContext';

export const usePlatform = (): NonNullable<AppRootContextInterface['platform']> => {
  const context = useAppRootContext();
  return context.platform || 'base';
};
