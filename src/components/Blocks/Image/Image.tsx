'use client';

import { ImgHTMLAttributes, isValidElement, ReactNode, SyntheticEvent, useState } from 'react';
import styles from './Image.module.css';

import { classNames } from 'helpers/classNames';

import { getBorderRadius } from 'components/Blocks/Image/helpers/getBorderRadius';
import { ImageBadge } from './components/ImageBadge/ImageBadge';

export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
  /** Specifies the size of the image, with a default of 40. Sizes are defined in pixels. */
  size?: 20 | 24 | 28 | 40 | 48 | 96;
  /** An element (often an icon) displayed when the image fails to load or the `src` attribute is not provided. */
  fallbackIcon?: ReactNode;
  /** Optional children to render within the image component's container. */
  children?: ReactNode;
}

/**
 * Renders an image with optional fallback content. It supports custom sizing and will automatically
 * handle loading states and errors by optionally displaying a fallback icon. This component can also
 * include additional content, such as badges or overlays, as children.
 */
export const Image = ({
  size = 40,
  className,
  alt,
  crossOrigin,
  decoding,
  loading,
  referrerPolicy,
  sizes,
  src,
  srcSet,
  useMap,
  style,
  fallbackIcon,
  children,
  onLoad,
  onError,
  ...restProps
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const hasSrc = src || srcSet;
  const needShowFallbackIcon = (failed || !hasSrc) && isValidElement(fallbackIcon);

  const handleImageLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    if (loaded) {
      return;
    }

    setLoaded(true);
    setFailed(false);
    onLoad?.(event);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    setLoaded(false);
    setFailed(true);
    onError?.(event);
  };

  return (
    <div
      style={{
        width: size,
        minWidth: size,
        height: size,
        borderRadius: style?.borderRadius || getBorderRadius(size),
        ...style,
      }}
      className={classNames(
        styles.wrapper,
        loaded && styles['wrapper--loaded'],
        className,
      )}
      {...restProps}
    >
      {hasSrc && (
        <img
          alt={alt}
          className={styles.image}
          crossOrigin={crossOrigin}
          decoding={decoding}
          loading={loading}
          referrerPolicy={referrerPolicy}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
          useMap={useMap}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      {needShowFallbackIcon && <div className={styles.fallback}>{fallbackIcon}</div>}
      {children}
    </div>
  );
};

Image.Badge = ImageBadge;
