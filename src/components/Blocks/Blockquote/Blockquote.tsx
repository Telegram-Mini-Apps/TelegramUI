import { HTMLAttributes, ReactNode } from 'react';
import styles from './Blockquote.module.css';

import { classNames } from 'helpers/classNames';

import { Icon12Quote } from 'icons/12/quote';

import { IconContainer } from 'components/Blocks/IconContainer/IconContainer';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
  /** Blockquote type, children will be wrapped in Typography component if type=text */
  type?: 'text' | 'other';
  /** Icon displayed in the top right corner of the blockquote, Icon12Quote by default */
  topRightIcon?: ReactNode;
  /** Content displayed inside the blockquote */
  children?: ReactNode;
}

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
