import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { useAppRootContext } from 'hooks/useAppRootContext';

import { AppRoot } from 'components/Service/AppRoot/AppRoot';

export interface RootRendererProps {
  children?: ReactNode;
}

export const RootRenderer = ({ children }: RootRendererProps) => {
  const { portalContainer, ...restProps } = useAppRootContext();

  if (!portalContainer?.current) {
    return React.isValidElement(children) ? children : null;
  }

  return createPortal(
    <AppRoot {...restProps}>
      {children}
    </AppRoot>,
    portalContainer.current,
  );
};
