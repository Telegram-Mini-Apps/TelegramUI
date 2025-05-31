'use client';

import { useCallback } from 'react';

import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';
import type { TypographyProps } from 'components/Typography/Typography';

export const useTypographyCellComponents = () => {
  const platform = usePlatform();
  const isIOS = platform === 'ios';

  const Title = useCallback(
    (props: TypographyProps) => {
      if (isIOS) {
        return <Text {...props} />;
      }

      return (
        <Subheadline
          level="1"
          {...props}
        />
      );
    },
    [isIOS]
  );

  const Description = useCallback(
    (props: TypographyProps) => {
      if (isIOS) {
        return <Caption {...props} />;
      }

      return (
        <Subheadline
          level="2"
          {...props}
        />
      );
    },
    [isIOS]
  );

  return {
    Title,
    Description,
  };
};
