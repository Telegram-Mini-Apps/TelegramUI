import { canUseDOM } from 'helpers/dom';

import type { Telegram } from '@twa-dev/types';

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}

export const getTelegramData = () => {
  if (!canUseDOM) {
    return undefined;
  }

  return window.Telegram?.WebApp;
};
