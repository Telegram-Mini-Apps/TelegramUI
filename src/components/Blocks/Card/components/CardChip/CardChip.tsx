import styles from './CardChip.module.css';

import { classNames } from 'helpers/classNames';

import type { ChipProps } from 'components/Form/Chip/Chip';
import { Chip } from 'components/Form/Chip/Chip';

export type CardChipProps = ChipProps;

export const CardChip = ({ className, ...restProps }: CardChipProps) => (
  <Chip
    className={classNames(styles.wrapper, className)}
    {...restProps}
  />
);
