import type { Meta, StoryObj } from '@storybook/react';
import { Icon20Copy } from 'icons/20/copy';
import { Icon24PersonRemove } from 'icons/24/person_remove';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Button } from './Button';

const meta = {
  title: 'Blocks/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...hideControls('before', 'after', 'Component'),
    ...setControlsTypes(['children'], 'text'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    size: 's',
    mode: 'filled',
    children: 'Action',
  },
} satisfies Story;

export const WithIcon: Story = {
  args: {
    size: 's',
    mode: 'filled',
    children: 'Create channel',
  },
  render: (args) => (
    <Button
      before={args.size === 's' ? <Icon20Copy /> : <Icon24PersonRemove />}
      {...args}
    />
  ),
} satisfies Story;

export const Link: Story = {
  args: {
    size: 's',
    mode: 'filled',
    children: 'No hello',
    target: '_blank',
    href: 'https://nohello.net/en/',
    Component: 'a',
  },
} satisfies Story;
