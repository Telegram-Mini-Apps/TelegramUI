import type { ReactNode } from 'react';

import { Drawer } from 'vaul';

export interface ModalCloseProps {
  children?: ReactNode;
}

export const ModalClose = (props: ModalCloseProps) => (
  <Drawer.Close
    asChild
    {...props}
  />
);
