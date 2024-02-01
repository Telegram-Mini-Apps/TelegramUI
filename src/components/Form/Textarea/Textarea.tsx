import { InputHTMLAttributes } from 'react';
import styles from './Textarea.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FormInput, FormPublicProps } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface TextareaProps extends Omit<FormPublicProps, 'after' | 'before'>, InputHTMLAttributes<HTMLInputElement> {}

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
