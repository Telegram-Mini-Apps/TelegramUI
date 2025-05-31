'use client';

import type { HTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './SliderThumb.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';
import type { RefProps } from 'types/ref';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface SliderThumbProps extends HTMLAttributes<HTMLSpanElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const SliderThumb = ({
  ref,
  className,
  inputProps,
  ...restProps
}: SliderThumbProps & RefProps<HTMLSpanElement>) => {
  const platform = usePlatform();

  return (
    <span
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        className
      )}
      {...restProps}
    >
      <VisuallyHidden
        {...inputProps}
        Component="input"
        type="range"
        ref={ref}
        className={classNames(styles.input, className)}
        aria-orientation="horizontal"
      />
    </span>
  );
};
