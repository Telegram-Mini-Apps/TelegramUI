type WindowWithTelegramData = {
  Telegram: {
    WebApp: {
      platform: string;
      colorScheme: 'light' | 'dark';
      onEvent: (event: string, callback: () => void) => void;
      offEvent: (event: string, callback: () => void) => void;
    }
  }
}

export const getTelegramData = (): WindowWithTelegramData['Telegram']['WebApp'] | undefined => {
  if ('Telegram' in window) {
    return (window as WindowWithTelegramData).Telegram.WebApp;
  }

  return undefined;
};
