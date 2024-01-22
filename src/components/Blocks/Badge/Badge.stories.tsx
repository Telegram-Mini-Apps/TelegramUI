import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Blocks/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dot: Story = {
  args: {
    type: 'dot',
    mode: 'primary',
  },
} satisfies Story;

export const Number: Story = {
  args: {
    mode: 'primary',
    type: 'number',
    children: 50,
  },
} satisfies Story;
