import { ButtonHTMLAttributes } from 'react';
import styles from './PinInputButton.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Tappable } from 'components/Service/Tappable/Tappable';
import { LargeTitle } from 'components/Typography/LargeTitle/LargeTitle';
import { Title } from 'components/Typography/Title/Title';
import { TypographyProps } from 'components/Typography/Typography';

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
