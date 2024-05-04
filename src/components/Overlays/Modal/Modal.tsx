'use client';

import {
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
  useEffect,
  useState,
} from 'react';
import styles from './Modal.module.css';

import { classNames } from 'helpers/classNames';
import { useAppRootContext } from 'hooks/useAppRootContext';

import { Drawer } from '@xelene/vaul-with-scroll-fix';

import { ModalClose } from './components/ModalClose/ModalClose';
import { ModalHeader } from './components/ModalHeader/ModalHeader';
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationEnd'> {
  /** Controls the displayed state of the modal, enabling external management. */
  open?: boolean;
  /** Callback fired upon state change, facilitating open/close state synchronization. */
  onOpenChange?: (open: boolean) => void;
  /** Custom header component to display at the top of the modal. */
  header?: ReactNode;
  /** Custom component for the modal's overlay backdrop. */
  overlayComponent?: ReactNode;
  /** Component or element used to trigger the modal's visibility. */
  trigger?: ReactNode;
  /** Enables nesting within another drawer component, allowing for hierarchical structures. */
  nested?: boolean;
  /** Threshold for swipe actions to trigger modal closure, expressed as a decimal between 0 and 1. */
  closeThreshold?: number;
  /** Debounce duration after scrolling within the modal before it can be closed through swipe actions. */
  scrollLockTimeout?: number;
  /** Governs interaction with background elements when the modal is open. */
  modal?: boolean;
  /** Prevents automatic scroll position restoration when the modal closes, preserving user context. */
  preventScrollRestoration?: boolean;
  /** Defines snap points for modal positioning, supporting percentages of screen height or pixel values. */
  snapPoints?: (number | string)[];
  /** Snap point index at which the overlay begins to fade, enhancing visual cues for modal depth. */
  fadeFromIndex?: never;
  /** Determines if the modal can be closed by user interactions */
  dismissible?: boolean;
}

type ModalWithComponents = ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> & {
  Header: typeof ModalHeader;
  Overlay: typeof Drawer.Overlay;
  Close: typeof ModalClose;
};

/**
 * Modal component, providing a flexible dialog framework with customizable content and interaction models.
 * It leverages the Drawer component from 'vaul' for its base functionality, enhanced with additional properties
 * and behaviors specific to modal dialogues, such as overlay management and nested modals.
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  overlayComponent = <ModalOverlay />,
  open,
  onOpenChange,
  header,
  className,
  children,
  nested,
  trigger,
  closeThreshold,
  scrollLockTimeout,
  snapPoints,
  fadeFromIndex,
  modal,
  preventScrollRestoration,
  dismissible,
  ...restProps
}, ref) => {
  const container = useAppRootContext();
  const [portal, setPortal] = useState(container.portalContainer?.current);

  // This is internal optimization for AppRoot
  // React sets ref to normal value only after the first render
  // If we will have this logic inside the AppRoot component, then all tree will be re-rendered
  useEffect(() => {
    setPortal(container.portalContainer?.current);
  }, [container.portalContainer]);

  const Component = nested ? Drawer.NestedRoot : Drawer.Root;
  return (
    <Component
      open={open}
      onOpenChange={onOpenChange}
      closeThreshold={closeThreshold}
      scrollLockTimeout={scrollLockTimeout}
      snapPoints={snapPoints}
      fadeFromIndex={fadeFromIndex}
      modal={modal}
      preventScrollRestoration={preventScrollRestoration}
      dismissible={dismissible}
    >
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal container={portal}>
        {overlayComponent}
        <Drawer.Content
          ref={ref}
          className={classNames(styles.wrapper, className)}
          {...restProps}
        >
          {header}
          <div className={styles.body}>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Component>
  );
}) as ModalWithComponents;

Modal.Header = ModalHeader;
Modal.Overlay = ModalOverlay;
Modal.Close = ModalClose;
