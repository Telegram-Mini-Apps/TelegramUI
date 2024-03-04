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

import { Drawer } from 'vaul';

import { ModalClose } from './components/ModalClose/ModalClose';
import { ModalHeader } from './components/ModalHeader/ModalHeader';
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay';

export type ModalProps = Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationEnd'> & {
  /** Controls modal state externally. */
  open?: boolean;
  /** Callback fired when the modal changes state. */
  onOpenChange?: (open: boolean) => void;
  /** Component that will be rendered as a header. */
  header?: ReactNode;
  /** Component that will be rendered as an overlay. */
  overlayComponent?: ReactNode;
  /** Component wrapper that will trigger the drawer to open. */
  trigger?: ReactNode;
  /** If true, the drawer will be nested inside the parent drawer. */
  nested?: boolean;
  /**
   * Number between 0 and 1 that determines when the drawer should be closed.
   * Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
   */
  closeThreshold?: number;
  /** Duration for which the drawer is not draggable after scrolling content inside the drawer. Defaults to 500ms */
  scrollLockTimeout?: number;
  /** When false it allows to interact with elements outside the drawer without closing it. Defaults true. */
  modal?: boolean;
  /** When true it prevents scroll restoration when the drawer is closed after a navigation happens inside of it. Defaults true. */
  preventScrollRestoration?: boolean;
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example [0.2, 0.5, 0.8].
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints?: (number | string)[];
  /** Index of a snapPoint from which the overlay fade should be applied. Defaults to the last snap point. */
  fadeFromIndex?: never;
};

type ModalWithComponents = ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> & {
  Header: typeof ModalHeader;
  Overlay: typeof Drawer.Overlay;
  Close: typeof ModalClose;
};

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
