'use client';

import { ButtonHTMLAttributes, ReactNode, useContext } from 'react';
import styles from './InlineButtonsItem.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Caption } from 'components/Typography/Caption/Caption';
import { InlineButtonsContext, InlineButtonsContextProps } from '../../InlineButtonsContext';

export interface InlineButtonsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text displayed inside the button. */
  text?: string;
  /** Optional mode for styling the button, with 'plain' as the default. */
  mode?: InlineButtonsContextProps['mode'];
  /** Typically an Icon, to be rendered inside the button. */
  children?: ReactNode;
}

const modeStyles = {
  bezeled: styles['wrapper--bezeled'],
  gray: styles['wrapper--gray'],
};

/**
 * `InlineButtons.Item` is designed for use within an InlineButtons container but can also serve as a standalone button
 * if used by itself. It supports displaying optional text and can inherit a styling mode from its parent InlineButtons
 * context or utilize a locally defined mode. This flexibility allows it to seamlessly integrate within various layouts
 * and designs, providing a consistent and adaptable interface element.
 */
export const InlineButtonsItem = ({
  mode: propsMode = 'plain',
  className,
  text,
  children,
  ...restProps
}: InlineButtonsItemProps) => {
  const platform = usePlatform();
  const { mode: inheritMode } = useContext(InlineButtonsContext);

  const mode = inheritMode || propsMode;
  return (
    <Tappable
      Component="button"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        mode !== 'plain' && modeStyles[mode],
        className,
      )}
      {...restProps}
    >
      {children}
      {hasReactNode(text) && <Caption className={styles.text} level="1" weight="2">{text}</Caption>}
    </Tappable>
  );
};
