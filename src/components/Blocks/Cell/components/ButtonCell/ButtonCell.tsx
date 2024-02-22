import { ElementType, forwardRef, ReactNode } from 'react';
import styles from './ButtonCell.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable, TappableProps } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

interface ButtonCellProps extends Omit<TappableProps, 'Component'> {
  /** Cell type, influence only on color */
  mode?: 'default' | 'destructive';
  /** Content before the text */
  before?: ReactNode;
  /** Content after the text */
  after?: ReactNode;
  /** DOM node, button by default */
  Component?: ElementType;
}

export const ButtonCell = forwardRef(({
  mode = 'default',
  before,
  after,
  className,
  children,
  Component,
  ...restProps
}: ButtonCellProps, ref) => {
  const platform = usePlatform();
  const Typography = platform === 'ios' ? Subheadline : Text;

  return (
    <Tappable
      ref={ref}
      Component={Component || 'button'}
      className={classNames(
        styles.wrapper,
        mode === 'destructive' && styles['wrapper--destructive'],
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      {hasReactNode(before) && before}
      {hasReactNode(children) && <Typography>{children}</Typography>}
      {hasReactNode(after) && after}
    </Tappable>
  );
});
