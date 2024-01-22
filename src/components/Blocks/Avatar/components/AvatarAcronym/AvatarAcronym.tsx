import { ImageProps } from 'components/Blocks/Image/Image';
import { Caption } from 'components/Typography/Caption/Caption';
import { Headline } from 'components/Typography/Headline/Headline';
import { LargeTitle } from 'components/Typography/LargeTitle/LargeTitle';
import { Title } from 'components/Typography/Title/Title';
import { TypographyProps } from 'components/Typography/Typography';

export interface AvatarAcronymProps extends TypographyProps {
  size: ImageProps['size'];
}

export const AvatarAcronym = ({ size, ...restProps }: AvatarAcronymProps) => {
  if (!size) {
    return null;
  }

  if (size <= 28) {
    return <Caption level={size <= 24 ? '2' : '1'} weight="1" caps {...restProps} />;
  }

  if (size === 40) {
    return <Headline weight="2" caps {...restProps} />;
  }

  if (size === 48) {
    return <Title weight="1" level="3" caps {...restProps} />;
  }

  return <LargeTitle weight="1" caps {...restProps} />;
};
