'use client';

import { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styles from './Banner.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Icon24Cancel } from 'icons/24/cancel';
import { Icon28Close } from 'icons/28/close';
import { Icon28CloseAmbient } from 'icons/28/close_ambient';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';
import { BannerDescriptionTypography } from './components/BannerDescriptionTypography/BannerDescriptionTypography';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Specifies the banner's layout style, which can affect its positioning and styling. */
  type?: 'section' | 'inline';
  /** Element(s) to be placed on the left side of the banner, typically an icon or an image. */
  before?: ReactNode;
  /** Content displayed above the main content as a subheading */
  callout?: ReactNode;
  /** The main text or title displayed in the banner. */
  header?: ReactNode;
  /** Additional information or subtext displayed below the header. */
  subheader?: ReactNode;
  /** Further details or description provided under the subheader. */
  description?: ReactNode;
  /** Custom background component or design, such as an image or gradient, that covers the banner's area. */
  background?: ReactNode;
  /** Callback function that is executed when the close icon of the banner is clicked. If not provided, the close icon is not displayed. */
  onCloseIcon?: MouseEventHandler<HTMLButtonElement>;
  /** Content or components, such as buttons, displayed within the banner. For multiple elements, wrap them in a React.Fragment. */
  children?: ReactNode;
}

/**
 * The `Banner` component renders a prominent graphical element, typically displayed at the top of a page or section, 
 * designed to grab the user's attention and convey important information. 
 * It is a versatile tool used for various purposes such as branding, promotion, announcements, or navigation.
 */
export const Banner = ({
  type,
  before,
  callout,
  header,
  subheader,
  description,
  background,
  className,
  children,
  onCloseIcon,
  ...restProps
}: BannerProps) => {
  const platform = usePlatform();
  const hasBackground = hasReactNode(background);

  return (
    <section
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        platform === 'base' && styles['wrapper--base'],
        hasBackground && styles['wrapper--withBackground'],
        type === 'inline' && styles['wrapper--inline'],
        className,
      )}
      {...restProps}
    >
      {hasBackground && (
        <div className={styles.background}>
          {background}
        </div>
      )}
      {before}
      <div className={styles.middle}>
        {hasReactNode(callout) && <Subheadline className={styles.subheader} level="2">{callout}</Subheadline>} 
        {hasReactNode(header) && <Text className={styles.title} weight="2">{header}</Text>}
        {hasReactNode(subheader) && <Subheadline className={styles.subheader} level="2">{subheader}</Subheadline>}
        {hasReactNode(description) && <BannerDescriptionTypography className={styles.description}>{description}</BannerDescriptionTypography>}
      </div>
      {onCloseIcon && (
        <Tappable onClick={onCloseIcon} className={styles.close} Component="div">
          {!hasBackground && (platform === 'ios' ? <Icon24Cancel /> : <Icon28Close />)}
          {hasBackground && <Icon28CloseAmbient />}
        </Tappable>
      )}
    </section>
  );
};
