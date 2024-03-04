import { ReactNode } from 'react';

import { Drawer } from 'vaul';

interface ModalCloseProps {
  children?: ReactNode;
}

export const ModalClose = (props: ModalCloseProps) => (
  <Drawer.Close asChild {...props} />
);
