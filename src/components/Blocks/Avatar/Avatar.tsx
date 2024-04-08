import styles from './Avatar.module.css';

import { classNames } from 'helpers/classNames';

import { Image, ImageProps } from 'components/Blocks/Image/Image';
import { AvatarAcronym } from './components/AvatarAcronym/AvatarAcronym';
import { AvatarBadge } from './components/AvatarBadge/AvatarBadge';

export interface AvatarProps extends ImageProps {
  /** One or two letters to be shown as a placeholder. `fallbackIcon` will not be used if `acronym` is provided. */
  acronym?: string;
}

/**
 * Renders an image with specific styles for an avatar presentation, including optional acronym display and badge support.
 * Utilizes the `Image` component for core functionality, enhancing it with avatar-specific features like acronyms and badges.
 */
export const Avatar = ({
  className,
  style,
  acronym,
  fallbackIcon,
  size,
  ...restProps
}: AvatarProps) => (
  <Image
    style={{ borderRadius: '50%', ...style }}
    className={classNames(
      styles.wrapper,
      acronym && styles['wrapper--withAcronym'],
      className,
    )}
    fallbackIcon={acronym ? <AvatarAcronym size={size}>{acronym}</AvatarAcronym> : fallbackIcon}
    size={size}
    {...restProps}
  />
);

Avatar.Badge = AvatarBadge;
