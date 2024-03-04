import { isValidElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useAppRootContext } from 'hooks/useAppRootContext';

export interface RootRendererProps {
  children?: ReactNode;
}

export const RootRenderer = ({ children }: RootRendererProps) => {
  const { portalContainer } = useAppRootContext();

  if (!portalContainer?.current) {
    return isValidElement(children) ? children : null;
  }

  return createPortal(
    children,
    portalContainer.current,
  );
};
