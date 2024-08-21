'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FormInput, FormPublicProps } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface InputProps extends FormPublicProps, InputHTMLAttributes<HTMLInputElement> {}

/**
 * Renders a text input field with enhanced styling and integration into a form structure. Supports customization through `FormPublicProps` and standard input attributes.
 * It automatically adapts typography and layout based on the platform, ensuring a consistent user experience across devices.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  header,
  before,
  after,
  status,
  className,
  disabled,
  ...restProps
}, ref) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      before={before}
      after={after}
      status={status}
      disabled={disabled}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
    >
      <TypographyComponent
        ref={ref}
        Component="input"
        className={styles.input}
        type={type}
        disabled={disabled}
        {...restProps}
      />
    </FormInput>
  );
});
