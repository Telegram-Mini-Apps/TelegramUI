import { AllHTMLAttributes, ElementType } from 'react';
import styles from './BreadCrumbsItem.module.css';

import { classNames } from 'helpers/classNames';

import { Subheadline } from 'components/Typography/Subheadline/Subheadline';

export interface BreadCrumbsItemProps extends AllHTMLAttributes<HTMLElement> {
  Component?: ElementType;
}

export const BreadCrumbsItem = ({
  Component = 'div',
  className,
  children,
  ...restProps
}: BreadCrumbsItemProps) => (
  <Component className={classNames(styles.wrapper, className)} {...restProps}>
    <Subheadline level="2" weight="2">{children}</Subheadline>
  </Component>
);
