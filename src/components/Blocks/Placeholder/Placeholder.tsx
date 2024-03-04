import { HTMLAttributes, ReactNode } from 'react';
import styles from './Placeholder.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { Text } from 'components/Typography/Text/Text';
import { Title } from 'components/Typography/Title/Title';

export interface PlaceholderProps extends HTMLAttributes<HTMLElement> {
  /** Header, usually img or lottie */
  children?: ReactNode;
  /** Title content */
  header?: ReactNode;
  /** Text content */
  description?: ReactNode;
  /** Action, usually button component */
  action?: ReactNode;
}

export const Placeholder = ({
  children,
  header,
  description,
  className,
  action,
  ...restProps
}: PlaceholderProps) => {
  const hasHeader = hasReactNode(header);
  const hasDescription = hasReactNode(description);

  return (
    <section
      className={classNames(styles.wrapper, className)}
      {...restProps}
    >
      {hasReactNode(children) && children}
      {(hasHeader || hasDescription) && (
        <dl className={styles.fields}>
          {hasHeader && <Title Component="dt" level="3" weight="2">{header}</Title>}
          {hasDescription && <Text className={styles.description} Component="dd">{description}</Text>}
        </dl>
      )}
      {hasReactNode(action) && action}
    </section>
  );
};
