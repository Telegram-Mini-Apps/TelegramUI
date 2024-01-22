import { ImgHTMLAttributes, isValidElement, ReactNode, SyntheticEvent, useState } from 'react';
import styles from './Image.module.css';

import { classNames } from 'helpers/classNames';

import { getBorderRadius } from 'components/Blocks/Image/helpers/getBorderRadius';
import { ImageBadge } from './components/ImageBadge/ImageBadge';

export interface ImageProps extends ImgHTMLAttributes<HTMLElement> {
  /** Available sizes, 40 is default */
  size?: 20 | 24 | 28 | 40 | 48 | 96;
  /** Fallback icon will be shown if image failed to load or src is not provided */
  fallbackIcon?: ReactNode;
}

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
