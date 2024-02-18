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

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Banner type */
  type?: 'section' | 'inline';
  /** Content displayed on the left side of the banner. */
  before?: ReactNode;
  /** Header content */
  header?: ReactNode;
  /** Content under the header */
  subheader?: ReactNode;
  /** Content under the subheader */
  description?: ReactNode;
  /** Background component, will be stretched */
  background?: ReactNode;
  /** Function called when the close icon is clicked, icon won't be shown if not passed */
  onCloseIcon?: MouseEventHandler<HTMLButtonElement>;
  /** Pass a collection of buttons here, if you need more than one button, pass React.Fragment */
  children?: ReactNode;
}

export const Banner = ({
  type,
  before,
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
        {hasReactNode(header) && <Text className={styles.title} weight="2">{header}</Text>}
        {hasReactNode(subheader) && <Subheadline className={styles.subheader} level="2">{subheader}</Subheadline>}
        {hasReactNode(description) && <Subheadline className={styles.description} level="2">{description}</Subheadline>}
        {hasReactNode(children) && (
          <div className={styles.buttons}>
            {children}
          </div>
        )}
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
