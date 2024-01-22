import type { Meta, StoryObj } from '@storybook/react';

import { Steps } from './Steps';

const meta = {
  title: 'Blocks/Steps',
  component: Steps,
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    count: 10,
    progress: 5,
  },
} satisfies Story;
