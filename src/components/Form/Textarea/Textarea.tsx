'use client';

import type { TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';
import type { RefProps } from 'types/ref';

import type { FormPublicProps } from 'components/Form/FormInput/FormInput';
import { FormInput } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface TextareaProps
  extends Omit<FormPublicProps, 'after' | 'before'>,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Wraps a standard HTML textarea element within a `FormInput` container, applying custom styles and functionality.
 * This component inherits the flexible design of the `FormInput`, allowing it to display a header and reflect different status styles.
 * The appearance and behavior of the textarea can be customized through various props, providing a seamless integration with forms.
 */
export const Textarea = ({
  ref,
  header,
  status,
  className,
  ...restProps
}: TextareaProps & RefProps<HTMLTextAreaElement>) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      status={status}
      className={classNames(
        platform === 'ios' && styles['wrapper--ios'],
        className
      )}
    >
      <TypographyComponent
        ref={ref}
        Component="textarea"
        className={styles.textarea}
        {...restProps}
      />
    </FormInput>
  );
};
