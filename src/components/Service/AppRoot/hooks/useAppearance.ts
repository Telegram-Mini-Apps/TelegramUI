import { useContext } from 'react';

import { getTelegramData } from 'helpers/telegram';

import { AppRootContext, AppRootContextInterface } from '../AppRootContext';

export const useAppearance = (appearanceProp?: AppRootContextInterface['appearance']): NonNullable<AppRootContextInterface['appearance']> => {
  if (appearanceProp !== undefined) {
    return appearanceProp;
  }

  const appContext = useContext(AppRootContext);
  if (appContext.isRendered && appContext.appearance !== undefined) {
    return appContext.appearance;
  }

  const telegramData = getTelegramData();
  if (telegramData) {
    return telegramData.colorScheme;
  }

  return 'light';
};
