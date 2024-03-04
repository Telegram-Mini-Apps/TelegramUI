import type { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from 'components';
import { ModalClose, ModalCloseProps } from './ModalClose';

const meta = {
  title: 'Overlays/Modal/Modal.Close',
  component: ModalClose,
} satisfies Meta<typeof ModalClose>;

export default meta;

export const Playground: StoryObj<ModalCloseProps> = {
  render: () => (
    <Placeholder
      description="This is a modal closer component. Wrap any component in Modal.Close and it will close after the click (or fire event onOpenChange if modal is controlled)"
    />
  ),
};
