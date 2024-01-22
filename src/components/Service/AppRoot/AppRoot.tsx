import { HTMLAttributes, RefObject, useEffect, useRef, useState } from 'react';
import styles from './AppRoot.module.css';

import { Platform } from 'enums/Platform';
import { classNames } from 'helpers/classNames';
import { getTelegramData } from 'helpers/telegram';
import { useObjectMemo } from 'hooks/useObjectMemo';

import { AppRootContext } from 'components/Service/AppRoot/AppRootContext';
import { getInitialPlatform } from './helpers/getInitialPlatform';

export interface AppRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Application platform, determined automatically if nothing passed */
  platform?: Platform;
  /** Application appearance, determined automatically if nothing passed */
  appearance?: 'light' | 'dark';
  /** Disable portal rendering, element will be shown in child container */
  disablePortal?: boolean;
  /** Rewriting portal container for rendering, AppRoot container as default */
  portalContainer?: RefObject<HTMLElement>;
}

export const AppRoot = ({
  platform: platformProp,
  appearance: appearanceProp,
  portalContainer,
  children,
  className,
  disablePortal,
  ...restProps
}: AppRootProps) => {
  const appRootContainer = useRef(null);
  const [appearance, setAppearance] = useState(appearanceProp);
  const platform = platformProp || getInitialPlatform();

  const contextValue = useObjectMemo({
    platform,
    appearance,
    portalContainer: portalContainer || appRootContainer,
  });

  const onHandleChangeTheme = () => {
    const telegramData = getTelegramData();
    if (!telegramData) {
      return;
    }

    setAppearance(telegramData.colorScheme);
  };

  useEffect(() => {
    const telegramData = getTelegramData();
    if (!telegramData) {
      return () => {};
    }

    telegramData.onEvent('themeChanged', onHandleChangeTheme);
    return () => telegramData.offEvent('themeChanged', onHandleChangeTheme);
  }, []);

  useEffect(() => {
    setAppearance(appearanceProp);
  }, [appearanceProp]);

  return (
    <div
      ref={appRootContainer}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        appearance === 'dark' && styles['wrapper--dark'],
        className,
      )}
      {...restProps}
    >
      <AppRootContext.Provider value={contextValue}>
        {children}
      </AppRootContext.Provider>
    </div>
  );
};
