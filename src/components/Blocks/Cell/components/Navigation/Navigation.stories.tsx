import type { Meta, StoryObj } from '@storybook/react';

import { Navigation } from './Navigation';

const meta = {
  title: 'Blocks/Cell/Navigation',
  component: Navigation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Action',
  },
} satisfies Story;
