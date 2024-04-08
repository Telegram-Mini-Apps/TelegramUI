import { InputHTMLAttributes } from 'react';
import styles from './Textarea.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FormInput, FormPublicProps } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface TextareaProps extends Omit<FormPublicProps, 'after' | 'before'>, InputHTMLAttributes<HTMLInputElement> {}

/**
 * Wraps a standard HTML textarea element within a `FormInput` container, applying custom styles and functionality.
 * This component inherits the flexible design of the `FormInput`, allowing it to display a header and reflect different status styles.
 * The appearance and behavior of the textarea can be customized through various props, providing a seamless integration with forms.
 */
export const Textarea = ({
  type = 'text',
  header,
  status,
  className,
  ...restProps
}: TextareaProps) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      status={status}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
    >
      <TypographyComponent
        Component="textarea"
        className={styles.textarea}
        type={type}
        {...restProps}
      />
    </FormInput>
  );
};
