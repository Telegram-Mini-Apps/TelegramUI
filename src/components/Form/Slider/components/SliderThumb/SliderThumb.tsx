'use client';

import { forwardRef, HTMLAttributes, InputHTMLAttributes } from 'react';
import styles from './SliderThumb.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface SliderThumbProps extends HTMLAttributes<HTMLSpanElement> {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  withTooltip?: boolean;
}

export const SliderThumb = forwardRef<HTMLSpanElement, SliderThumbProps>(
  ({ className, inputProps, withTooltip, ...restProps }, ref) => {
    const platform = usePlatform();

    return (
      <span
        className={classNames(
          styles.wrapper,
          platform === 'ios' && styles['wrapper--ios'],
          className,
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
  },
);
