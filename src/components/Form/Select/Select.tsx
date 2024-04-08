'use client';

import { ReactNode, SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { Icon20ChevronDown } from 'icons/20/chevron_down';

import { FormInput, FormPublicProps } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface SelectProps extends Omit<FormPublicProps, 'after'>, SelectHTMLAttributes<HTMLSelectElement> {
  /** Children elements, typically `option` elements to be rendered within the select. */
  children: ReactNode;
}

/**
 * Renders a custom styled select input within a `FormInput` container. This component is designed to integrate seamlessly
 * with the form input styles, providing a consistent look and enhanced features such as a custom dropdown arrow and support
 * for platform-specific typography. The `FormInput` wrapper facilitates the inclusion of headers and status messages.
 */
export const Select = ({
  header,
  before,
  status,
  className,
  ...restProps
}: SelectProps) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      before={before}
      status={status}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
    >
      <TypographyComponent
        Component="select"
        className={styles.select}
        multiple={false}
        {...restProps}
      />
      <Icon20ChevronDown aria-hidden className={styles.chevron} />
    </FormInput>
  );
};
