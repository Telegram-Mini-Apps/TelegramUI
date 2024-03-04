import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import styles from './AppRoot.module.css';

import { classNames } from 'helpers/classNames';
import { multipleRef } from 'helpers/react/refs';
import { getTelegramData } from 'helpers/telegram';
import { useObjectMemo } from 'hooks/useObjectMemo';

import { AppRootContext, AppRootContextInterface } from 'components/Service/AppRoot/AppRootContext';
import { useAppearance } from 'components/Service/AppRoot/hooks/useAppearance';
import { usePlatform } from './hooks/usePlatform';
import { usePortalContainer } from './hooks/usePortalContainer';

export interface AppRootProps extends HTMLAttributes<HTMLDivElement> {
  /** Application platform, determined automatically if nothing passed */
  platform?: AppRootContextInterface['platform'];
  /** Application appearance, determined automatically if nothing passed */
  appearance?: AppRootContextInterface['appearance'];
  /** Rewriting portal container for rendering, AppRoot container as default */
  portalContainer?: AppRootContextInterface['portalContainer'];
}

export const AppRoot = forwardRef<HTMLDivElement, AppRootProps>(({
  platform: platformProp,
  appearance: appearanceProp,
  portalContainer: portalContainerProp,
  children,
  className,
  ...restProps
}, ref) => {
  const [appearance, setAppearance] = useState(useAppearance(appearanceProp));
  const portalContainer = usePortalContainer(portalContainerProp);
  const platform = usePlatform(platformProp);

  const contextValue = useObjectMemo({
    platform,
    appearance,
    portalContainer,
    isRendered: true,
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
    appearanceProp && setAppearance(appearanceProp);
  }, [appearanceProp]);

  return (
    <div
      ref={multipleRef(ref, portalContainer)}
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
});
