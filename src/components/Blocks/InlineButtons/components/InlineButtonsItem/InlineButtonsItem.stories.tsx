import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Chat } from 'icons/24/chat';
import { hideControls } from 'storybook/controls';

import { InlineButtonsItem } from './InlineButtonsItem';

const meta = {
  title: 'Blocks/InlineButtons/InlineButtons.Item',
  component: InlineButtonsItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: hideControls('children'),
} satisfies Meta<typeof InlineButtonsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    mode: 'plain',
    text: 'Chat',
    children: <Icon24Chat />,
  },
  render: (args) => (
    <div style={{ maxWidth: 160 }}>
      <InlineButtonsItem {...args} />
    </div>
  ),
} satisfies Story;
