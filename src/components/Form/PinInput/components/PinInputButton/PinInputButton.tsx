import { ButtonHTMLAttributes } from 'react';
import styles from './PinInputButton.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { LargeTitle, Title, TypographyProps } from 'components';
import { Tappable } from 'components/Service/Tappable/Tappable';

export interface PinInputButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonTypography = (props: TypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <LargeTitle {...props} />;
  }

  return <Title {...props} />;
};

export const PinInputButton = ({
  children,
  ...restProps
}: PinInputButtonProps) => {
  const platform = usePlatform();

  return (
    <Tappable
      Component="button"
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
      )}
      {...restProps}
    >
      <ButtonTypography>{children}</ButtonTypography>
    </Tappable>
  );
};
