'use client';

import { HTMLAttributes } from 'react';
import styles from './SectionFooter.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Caption } from 'components/Typography/Caption/Caption';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { TypographyProps } from 'components/Typography/Typography';

export interface SectionFooterProps extends HTMLAttributes<HTMLElement> {
  /** Centering text, adding additional indents */
  centered?: boolean;
}

const FooterTypography = ({ ...restProps }: TypographyProps) => {
  const platform = usePlatform();

  if (platform === 'ios') {
    return <Caption {...restProps} />;
  }

  return <Subheadline level="2" {...restProps} />;
};

export const SectionFooter = ({ className, children, centered, ...restProps }: SectionFooterProps) => {
  const platform = usePlatform();

  return (
    <footer
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        centered && styles['wrapper--centered'],
        className,
      )}
      {...restProps}
    >
      <FooterTypography className={styles.text}>{children}</FooterTypography>
    </footer>
  );
};
