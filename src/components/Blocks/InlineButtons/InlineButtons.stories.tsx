import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Chat } from 'icons/24/chat';
import { Icon24Notifications } from 'icons/24/notifications';
import { Icon24QR } from 'icons/24/qr';
import { hideControls } from 'storybook/controls';

import { InlineButtons } from './InlineButtons';

const meta = {
  title: 'Blocks/InlineButtons',
  component: InlineButtons,
  parameters: {
    layout: 'centered',
  },
  argTypes: hideControls('children'),
} satisfies Meta<typeof InlineButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    mode: 'plain',
    children: [
      <InlineButtons.Item text="Chat">
        <Icon24Chat />
      </InlineButtons.Item>,
      <InlineButtons.Item text="Mute">
        <Icon24Notifications />
      </InlineButtons.Item>,
      <InlineButtons.Item text="QR">
        <Icon24QR />
      </InlineButtons.Item>,
    ],
  },
} satisfies Story;
