'use client';

import { AllHTMLAttributes, ElementType, forwardRef, PointerEvent } from 'react';
import styles from './Tappable.module.css';

import { classNames } from 'helpers/classNames';
import { usePlatform } from 'hooks/usePlatform';

import { useRipple } from './components/Ripple/hooks/useRipple';
import { Ripple } from './components/Ripple/Ripple';

export interface TappableProps extends AllHTMLAttributes<HTMLElement> {
  /** HTML Tag */
  Component?: ElementType;
  interactiveAnimation?: 'opacity' | 'background';
}

export const Tappable = forwardRef(({
  Component = 'div',
  children,
  className,
  interactiveAnimation = 'background',
  readOnly,
  onPointerDown,
  onPointerCancel,
  ...restProps
}: TappableProps, ref) => {
  const platform = usePlatform();
  const { clicks, onPointerCancel: handleRipplePointerCancel, onPointerDown: handleRipplePointerDown } = useRipple();

  const handlePointerDown = (e: PointerEvent<HTMLElement>) => {
    onPointerDown?.(e);
    handleRipplePointerDown(e);
  };

  const handlePointerCancel = (e: PointerEvent<HTMLElement>) => {
    onPointerCancel?.(e);
    handleRipplePointerCancel(e);
  };

  const hasRippleEffect = platform === 'base' && interactiveAnimation === 'background' && !readOnly;
  return (
    <Component
      ref={ref}
      className={classNames(
        styles.wrapper,
        platform === 'ios' && styles['wrapper--ios'],
        interactiveAnimation === 'opacity' && styles['wrapper--opacity'],
        className,
      )}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      readOnly={readOnly}
      {...restProps}
    >
      {hasRippleEffect && <Ripple clicks={clicks} />}
      {children}
    </Component>
  );
});
