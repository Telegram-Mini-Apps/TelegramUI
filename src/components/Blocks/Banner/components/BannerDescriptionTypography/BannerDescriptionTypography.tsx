import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { TypographyProps } from 'components/Typography/Typography';

export interface BannerDescriptionTypographyProps extends Omit<TypographyProps, 'level'> {
}

export const BannerDescriptionTypography = (props: BannerDescriptionTypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Caption level="1" {...props} />;
  }

  return <Subheadline level="2" {...props} />;
};
