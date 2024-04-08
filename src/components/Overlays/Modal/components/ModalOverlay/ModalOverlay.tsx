import { forwardRef, useMemo } from 'react';
import styles from './ModalOverlay.module.css';

import { classNames } from 'helpers/classNames';
import { hexToRGB } from 'helpers/color';
import { getTelegramData } from 'helpers/telegram';
import { useAppRootContext } from 'hooks/useAppRootContext';

import { Drawer } from '@xelene/vaul-with-scroll-fix';

export interface ModalOverlayProps {
  className?: string;
}

const DEFAULT_LIGHT_OVERLAY_RGB = [255, 255, 255];
const DEFAULT_DARK_OVERLAY_RGB = [33, 33, 33];

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({
  className,
  ...props
}, ref) => {
  const context = useAppRootContext();

  // We don't use getComputedStyle because overlay renders before the appearance is changing
  const [r, g, b] = useMemo(() => {
    const telegramData = getTelegramData();
    if (telegramData && telegramData.themeParams.bg_color) {
      return hexToRGB(telegramData.themeParams.bg_color);
    }

    return context.appearance === 'light' ? DEFAULT_LIGHT_OVERLAY_RGB : DEFAULT_DARK_OVERLAY_RGB;
  }, [context.appearance]);

  return (
    <Drawer.Overlay
      ref={ref}
      // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
      // This is why we use rgba here and not background: token + opacity
      style={{ background: `rgba(${r}, ${g}, ${b}, .4)` }}
      className={classNames(styles.wrapper, className)}
      {...props}
    />
  );
});
