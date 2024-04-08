import { HTMLAttributes, ReactNode } from 'react';
import styles from './Placeholder.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';

import { Text } from 'components/Typography/Text/Text';
import { Title } from 'components/Typography/Title/Title';

export interface PlaceholderProps extends HTMLAttributes<HTMLElement> {
  /** Element(s) to be displayed as the primary visual content, typically an image or an animation. */
  children?: ReactNode;
  /** The primary text, usually a title or a header, for the placeholder. */
  header?: ReactNode;
  /** Additional descriptive text to provide more details or context. */
  description?: ReactNode;
  /** An actionable element, such as a button, to be placed in the placeholder for user interaction. */
  action?: ReactNode;
}

/** A versatile component designed to display a placeholder with optional text, images, and actions. */
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
