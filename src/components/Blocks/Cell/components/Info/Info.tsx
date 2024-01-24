import { HTMLAttributes, ReactElement } from 'react';
import styles from './Info.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react';

import { AvatarStackProps } from 'components/Blocks/AvatarStack/AvatarStack';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  /** Info type */
  type: 'text' | 'avatarStack';
  /** Text content, only applicable with type="text" */
  subtitle?: string;
  /** AvatarStack component, only applicable with type="avatarStack" */
  avatarStack?: ReactElement<AvatarStackProps>;
}

const typeStyles = {
  text: styles['wrapper--text'],
  avatarStack: styles['wrapper--avatarStack'],
};

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
