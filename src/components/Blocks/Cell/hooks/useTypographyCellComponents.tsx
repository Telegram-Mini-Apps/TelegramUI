import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';
import { TypographyProps } from 'components/Typography/Typography';

export const useTypographyCellComponents = () => {
  const platform = usePlatform();
  const isIOS = platform === 'ios';

  const Title = ({ children, ...restProps }: TypographyProps) => {
    if (isIOS) {
      return <Text weight="3" {...restProps}>{children}</Text>;
    }

    return <Subheadline weight="3" level="1" {...restProps}>{children}</Subheadline>;
  };

  const Description = ({ children, ...restProps }: TypographyProps) => {
    if (isIOS) {
      return <Caption weight="3" {...restProps}>{children}</Caption>;
    }

    return <Subheadline weight="3" level="2" {...restProps}>{children}</Subheadline>;
  };

  return {
    Title,
    Description,
  };
};
