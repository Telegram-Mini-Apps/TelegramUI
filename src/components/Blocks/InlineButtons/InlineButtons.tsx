'use client';

import { forwardRef, ForwardRefExoticComponent, HTMLAttributes, ReactElement, RefAttributes } from 'react';
import styles from './InlineButtons.module.css';

import { classNames } from 'helpers/classNames';
import { useObjectMemo } from 'hooks/useObjectMemo';
import { usePlatform } from 'hooks/usePlatform';

import { InlineButtonsItem, InlineButtonsItemProps } from './components/InlineButtonsItem/InlineButtonsItem';
import { InlineButtonsContext, InlineButtonsContextProps } from './InlineButtonsContext';

export interface InlineButtonsProps extends HTMLAttributes<HTMLDivElement> {
  /** Dictates the styling mode for the inline buttons, affecting color and background. */
  mode?: InlineButtonsContextProps['mode'];
  /**
   * Children should be `InlineButtons.Item` components. Each child will inherit the `mode`
   * from this parent, ensuring consistent styling across all items.
   */
  children: ReactElement<InlineButtonsItemProps>[];
}

type InlineButtonsWithComponents = ForwardRefExoticComponent<InlineButtonsProps & RefAttributes<HTMLDivElement>> & {
  Item: typeof InlineButtonsItem;
};

/**
 * `InlineButtons` acts as a container for `InlineButtons.Item` components. This component
 * provides a unified context for styling and interaction, leveraging the `mode` to apply
 * consistent styling across all child components. It ensures visual consistency across different
 * platforms and supports custom styling modes.
 */
export const InlineButtons = forwardRef(({
  mode,
  className,
  children,
  ...restProps
}: InlineButtonsProps, ref) => {
  const platform = usePlatform();
  const contextValue = useObjectMemo({ mode });

  return (
    <div
      ref={ref}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      <InlineButtonsContext.Provider value={contextValue}>
        {children}
      </InlineButtonsContext.Provider>
    </div>
  );
}) as InlineButtonsWithComponents;

InlineButtons.Item = InlineButtonsItem;
