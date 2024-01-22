import styles from './ImageBadge.module.css';

import { classNames } from 'helpers/classNames';

import { Badge, BadgeProps } from 'components/Blocks/Badge/Badge';

export interface ImageBadgeProps extends BadgeProps {}

export const ImageBadge = ({ type, className, ...restProps }: ImageBadgeProps) => {
  if (type !== 'number') {
    console.error('[ImageBadge]: Component supports only type="number"');
    return null;
  }

  return (
    <Badge
      type="number"
      className={classNames(styles.wrapper, className)}
      {...restProps}
    />
  );
};
