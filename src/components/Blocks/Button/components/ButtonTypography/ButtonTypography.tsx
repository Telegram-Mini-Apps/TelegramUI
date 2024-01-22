import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';
import { TypographyProps } from 'components/Typography/Typography';

export interface ButtonTypographyProps extends Omit<TypographyProps, 'size'> {
  size: 's' | 'm' | 'l';
}

export const ButtonTypography = ({ size, ...restProps }: ButtonTypographyProps) => {
  if (size === 'l') {
    return <Text weight="2" {...restProps} />;
  }

  return <Subheadline level="2" weight="2" {...restProps} />;
};
