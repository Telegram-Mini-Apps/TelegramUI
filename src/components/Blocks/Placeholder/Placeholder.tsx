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
}: PlaceholderProps) => (
  <section
    className={classNames(styles.wrapper, className)}
    {...restProps}
  >
    {hasReactNode(children) && children}
    <dl className={styles.fields}>
      {hasReactNode(header) && <Title Component="dt" level="3">{header}</Title>}
      {hasReactNode(description) && <Text className={styles.description} Component="dd">{description}</Text>}
    </dl>
    {hasReactNode(action) && action}
  </section>
);
