import { HTMLAttributes, ReactNode, useState } from 'react';
import styles from './FormInput.module.css';

import { classNames } from 'helpers/classNames';
import { hasReactNode } from 'helpers/react';
import { usePlatform } from 'hooks/usePlatform';

import { FormInputTitle } from './components/FormInputTitle';

export interface FormPublicProps {
  /** Form status, higher priority than automatic */
  status?: 'default' | 'error' | 'focused';
  /** Form header will be shown only for "base" platform */
  header?: ReactNode;
  /** Content before the Form */
  before?: ReactNode;
  /** Content after the Form */
  after?: ReactNode;
}

export interface FormInputProps extends FormPublicProps, HTMLAttributes<HTMLLabelElement> {}

const platformStyles = {
  base: styles['wrapper--base'],
  ios: styles['wrapper--ios'],
};

const formStatusStyles = {
  default: styles['wrapper--default'],
  error: styles['wrapper--error'],
  focused: styles['wrapper--focused'],
};

export const FormInput = ({
  status,
  header,
  before,
  after,
  children,
  className,
  ...restProps
}: FormInputProps) => {
  const platform = usePlatform();
  const [isFocused, setIsFocused] = useState(false);

  const formStatus = status || (isFocused ? 'focused' : 'default');
  return (
    <div
      className={classNames(
        styles.wrapper,
        platformStyles[platform],
        formStatusStyles[formStatus],
      )}
    >
      {hasReactNode(header) && platform === 'base' && (
        <FormInputTitle className={styles.title}>{header}</FormInputTitle>
      )}
      <label
        className={classNames(styles.body, className)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...restProps}
      >
        {hasReactNode(before) && (
          <div className={styles.before}>
            {before}
          </div>
        )}
        {children}
        {hasReactNode(after) && (
          <div className={styles.after}>
            {after}
          </div>
        )}
      </label>
    </div>
  );
};
