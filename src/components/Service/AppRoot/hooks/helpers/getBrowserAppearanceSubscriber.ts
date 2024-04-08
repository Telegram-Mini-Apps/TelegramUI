import { canUseDOM } from 'helpers/dom';

import { AppRootContextInterface } from 'components/Service/AppRoot/AppRootContext';

export const getBrowserAppearanceSubscriber = (
  setAppearance: (appearance: NonNullable<AppRootContextInterface['appearance']>) => void,
): () => void => {
  if (!canUseDOM || !window.matchMedia) {
    return () => {};
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = () => {
    setAppearance(mediaQuery.matches ? 'dark' : 'light');
  };

  mediaQuery.addEventListener('change', listener);
  return () => mediaQuery.removeEventListener('change', listener);
};
