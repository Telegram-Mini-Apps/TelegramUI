import { Platform } from 'enums/Platform';
import { getTelegramData } from 'helpers/telegram';

export const getInitialPlatform = () => {
  if (getTelegramData()?.platform === 'ios') {
    return Platform.IOS;
  }

  return Platform.Base;
};
