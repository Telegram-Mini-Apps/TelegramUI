import { Platform } from 'enums/Platform';
import { getTelegramData } from 'helpers/telegram';

export const getInitialPlatform = () => {
  const telegramData = getTelegramData();
  if (!telegramData) {
    return Platform.Base;
  }

  if (['ios', 'macos'].includes(telegramData.platform)) {
    return Platform.IOS;
  }

  return Platform.Base;
};
