import { HTMLAttributes, ReactElement } from 'react';
import styles from './Info.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { AvatarStackProps } from 'components/Blocks/AvatarStack/AvatarStack';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines the type of content to display, affecting the layout and styling. */
  type: 'text' | 'avatarStack';
  /** Text content for the component, utilized when the `type` is set to 'text'. */
  subtitle?: string;
  /** An `AvatarStack` component to display when the `type` is 'avatarStack', showcasing multiple avatars. */
  avatarStack?: ReactElement<AvatarStackProps>;
}

const typeStyles = {
  text: styles['wrapper--text'],
  avatarStack: styles['wrapper--avatarStack'],
};

/**
 * A versatile component designed to display either text information with an optional subtitle or a stack of avatars.
 * It adapts its structure based on the `type` prop, allowing for a wide range of use cases within user interfaces.
 */
export const Info = ({
  type = 'text',
  subtitle,
  avatarStack,
  children,
  className,
  ...restProps
}: InfoProps) => {
  const isAvatarStack = type === 'avatarStack';
  const isText = type === 'text';

  return (
    <div
      className={classNames(
        styles.wrapper,
        typeStyles[type],
        className,
      )}
      {...restProps}
    >
      {isAvatarStack && hasReactNode(avatarStack) && avatarStack}
      {hasReactNode(children) && <Text>{children}</Text>}
      {isText && hasReactNode(subtitle) && (
        <Subheadline className={styles.subtitle} level="2" plain={false}>
          {subtitle}
        </Subheadline>
      )}
    </div>
  );
};
