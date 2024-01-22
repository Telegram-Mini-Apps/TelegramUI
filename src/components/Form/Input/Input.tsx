import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { FormInput, FormPublicProps } from 'components/Form/FormInput/FormInput';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { Text } from 'components/Typography/Text/Text';

export interface InputProps extends FormPublicProps, InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
  type = 'text',
  header,
  before,
  after,
  status,
  className,
  ...restProps
}: InputProps) => {
  const platform = usePlatform();

  const TypographyComponent = platform === 'ios' ? Text : Subheadline;
  return (
    <FormInput
      header={header}
      before={before}
      after={after}
      status={status}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className,
      )}
    >
      <TypographyComponent
        Component="input"
        className={styles.input}
        type={type}
        {...restProps}
      />
    </FormInput>
  );
};
