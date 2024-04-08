'use client';

import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';
import { TypographyProps } from 'components/Typography/Typography';

export const useHeaderComponents = () => {
  const platform = usePlatform();

  const Default = ({ ...restProps }: TypographyProps) => {
    if (platform === 'ios') {
      return <Caption caps {...restProps} />;
    }

    return <Subheadline level="2" weight="2" {...restProps} />;
  };

  const Large = ({ ...restProps }: TypographyProps) => {
    if (platform === 'ios') {
      return <Subheadline level="1" weight="2" {...restProps} />;
    }

    return <Text weight="2" {...restProps} />;
  };

  return {
    Default,
    Large,
  };
};
