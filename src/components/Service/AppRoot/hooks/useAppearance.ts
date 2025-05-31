'use client';

import { useCallback, useContext, useEffect, useState } from 'react';

import { getTelegramData } from 'helpers/telegram';

import type { AppRootContextInterface } from '../AppRootContext';
import { AppRootContext } from '../AppRootContext';
import { getBrowserAppearanceSubscriber } from './helpers/getBrowserAppearanceSubscriber';
import { getInitialAppearance } from './helpers/getInitialAppearance';

export const useAppearance = (
  appearanceProp?: AppRootContextInterface['appearance']
): NonNullable<AppRootContextInterface['appearance']> => {
  const appContext = useContext(AppRootContext);
  const [appearance, setAppearance] = useState(
    () => appearanceProp || appContext?.appearance || getInitialAppearance()
  );

  const handleThemeChange = useCallback(() => {
    const telegramData = getTelegramData();
    if (!telegramData) {
      return;
    }

    setAppearance(telegramData.colorScheme);
  }, []);

  useEffect(() => {
    if (appearanceProp !== undefined) {
      // todo: find out if it is necessary
      // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
      setAppearance(appearanceProp);
      return () => {};
    }

    const telegramData = getTelegramData();
    if (telegramData) {
      telegramData.onEvent('themeChanged', handleThemeChange);
      return () => telegramData.offEvent('themeChanged', handleThemeChange);
    }

    return getBrowserAppearanceSubscriber(setAppearance);
  }, [appearanceProp, handleThemeChange]);

  return appearance;
};
