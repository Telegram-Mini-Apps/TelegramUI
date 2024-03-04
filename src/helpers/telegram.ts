import { Telegram } from '@twa-dev/types';

declare global {
  interface Window {
    Telegram?: Telegram;
  }
}

export const getTelegramData = () => {
  return window.Telegram?.WebApp;
};
