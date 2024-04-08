import { ReactNode } from 'react';

import { Drawer } from '@xelene/vaul-with-scroll-fix';

export interface ModalCloseProps {
  children?: ReactNode;
}

export const ModalClose = (props: ModalCloseProps) => (
  <Drawer.Close asChild {...props} />
);
