'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.css';

import { classNames } from 'helpers/classNames';
import { isPrimitiveReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { SectionFooter } from './components/SectionFooter/SectionFooter';
import { SectionHeader } from './components/SectionHeader/SectionHeader';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content for the section header. If a string is passed, `Section.Header` is automatically used.
   * For more control or a large title, use `<Section.Header large>{headerText}</Section.Header>`.
   */
  header?: ReactNode;
  /**
   * The content for the section footer. If a string is passed, `Section.Footer` is automatically used.
   * For a centered footer, use `<Section.Footer centered>{footerText}</Section.Footer>`.
   */
  footer?: ReactNode;
}

const platformStyles = {
  base: styles['wrapper--base'],
  ios: styles['wrapper--ios'],
};

/**
 * Organizes content into distinct sections with optional headers and footers. It automatically wraps
 * primitive header and footer content in the appropriate sub-components, and inserts dividers between
 * children when rendering multiple elements.
 */
export const Section = ({
  header,
  footer,
  className,
  children,
  ...restProps
}: SectionProps) => {
  const platform = usePlatform();

  const headerWithWrapper = isPrimitiveReactNode(header) ? (
    <SectionHeader>{header}</SectionHeader>
  ) : (
    header
  );
  const footerWithWrapper = isPrimitiveReactNode(footer) ? (
    <SectionFooter>{footer}</SectionFooter>
  ) : (
    footer
  );

  return (
    <section
      className={classNames(platformStyles[platform], className)}
      {...restProps}
    >
      <div className={styles.bodyWithHeader}>
        {headerWithWrapper}
        <div className={styles.body}>{children}</div>
      </div>
      {footerWithWrapper}
    </section>
  );
};

Section.Header = SectionHeader;
Section.Footer = SectionFooter;
