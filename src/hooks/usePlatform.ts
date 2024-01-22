import { Platform } from 'enums/Platform';
import { useAppRootContext } from 'hooks/useAppRootContext';

export const usePlatform = (): Platform => {
  const context = useAppRootContext();
  return context.platform || Platform.Base;
};
