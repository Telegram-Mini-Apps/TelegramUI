'use client';

import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { TypographyProps } from 'components/Typography/Typography';

export const FormInputTitle = ({ ...restProps }: TypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Caption caps {...restProps} />;
  }

  return <Subheadline level="2" weight="2" {...restProps} />;
};
