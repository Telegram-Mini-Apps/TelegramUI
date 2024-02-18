import { Chip, ChipProps } from 'components/Form/Chip/Chip';

export const renderChipDefault = (props: ChipProps) => {
  const { ...rest } = props;
  return <Chip mode="mono" {...rest} />;
};
