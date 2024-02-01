import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './TabbarItem.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { Caption } from 'components/Typography/Caption/Caption';

export interface TabbarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Is tab selected */
  selected?: boolean;
  /** Text of the tab */
  text?: string;
  /** Icon of the tab, pass 28x28 */
  children?: ReactNode;
}

export const TabbarItem = ({
  selected,
  text,
  children,
  className,
  ...restProps
}: TabbarItemProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="button"
      interactiveAnimation="opacity"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        selected && styles['wrapper--selected'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(children) && (
        <div className={styles.icon}>
          {children}
        </div>
      )}
      {hasReactNode(text) && (
        <Caption
          className={styles.text}
          weight="2"
          level={platform === 'ios' ? '2' : '1'}
        >
          {text}
        </Caption>
      )}
    </Tappable>
  );
};
