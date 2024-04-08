import { HTMLAttributes, ReactNode } from 'react';
import styles from './Blockquote.module.css';

import { classNames } from 'helpers/classNames';

import { Icon12Quote } from 'icons/12/quote';

import { IconContainer } from 'components/Blocks/IconContainer/IconContainer';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines the content type within the blockquote, influencing its presentation. */
  type?: 'text' | 'other';
  /** An optional icon displayed in the top right corner of the blockquote. Defaults to a quote icon. */
  topRightIcon?: ReactNode;
  /** The main content of the blockquote. When `type` is 'text', this content is wrapped in a typography component. */
  children?: ReactNode;
}

/**
 * Renders a stylized blockquote element, typically used for quotations or special text. The component can include an
 * icon in the top right corner and supports different content types for flexible use within UI designs.
 */
export const Blockquote = ({
  type = 'text',
  topRightIcon = <Icon12Quote />,
  className,
  children,
  ...restProps
}: BlockquoteProps) => (
  <div
    className={classNames(
      styles.wrapper,
      className,
    )}
    {...restProps}
  >
    {type === 'text' ? <Subheadline className={styles.text}>{children}</Subheadline> : children}
    <IconContainer className={styles.topRightIcon}>
      {topRightIcon}
    </IconContainer>
  </div>
);
