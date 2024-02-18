import { Children, HTMLAttributes, ReactNode } from 'react';
import styles from './Section.module.css';

import { classNames } from 'helpers/classNames';
import { isPrimitiveReactNode } from 'helpers/react/node';
import { usePlatform } from 'hooks/usePlatform';

import { Divider } from 'components/Misc/Divider/Divider';
import { SectionFooter } from './components/SectionFooter/SectionFooter';
import { SectionHeader } from './components/SectionHeader/SectionHeader';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** If text is passed - the component automatically uses SectionHeader, if u want a large title, pass &lt;Section.Header large>{headerText}</Section.Header> */
  header?: ReactNode;
  /** If text is passed - the component automatically uses SectionFooter, if u want a centered footer, pass &lt;Section.Footer centered>{footerText}</Section.Footer> */
  footer?: ReactNode;
}

export const Section = ({ header, footer, className, children, ...restProps }: SectionProps) => {
  const platform = usePlatform();

  const headerWithWrapper = isPrimitiveReactNode(header) ? <SectionHeader>{header}</SectionHeader> : header;
  const footerWithWrapper = isPrimitiveReactNode(footer) ? <SectionFooter>{footer}</SectionFooter> : footer;

  return (
    <section
      className={classNames(
        styles.wrapper,
        platform === 'base' && styles['wrapper--base'],
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
      {...restProps}
    >
      <div className={styles.bodyWithHeader}>
        {headerWithWrapper}
        <div className={styles.body}>
          {Children.map(children, (child, index) => (
            <>
              {child}
              {index < Children.count(children) - 1 && (
                <Divider className={styles.divider} />
              )}
            </>
          ))}
        </div>
      </div>
      {footerWithWrapper}
    </section>
  );
};

Section.Header = SectionHeader;
Section.Footer = SectionFooter;

