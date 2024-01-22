import type { Meta, StoryObj } from '@storybook/react';

import { LargeTitle } from './LargeTitle';

const meta = {
  title: 'Typography/LargeTitle',
  component: LargeTitle,
  parameters: {
    controls: {
      exclude: 'Component',
    },
  },
} satisfies Meta<typeof LargeTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    plain: false,
  },
  render: (args) => (
    <>
      <LargeTitle weight="1" {...args}>
        Large Title · Regular
      </LargeTitle>
      <LargeTitle weight="2" {...args}>
        Large Title · Semibold
      </LargeTitle>
      <LargeTitle weight="3" {...args}>
        Large Title · Bold
      </LargeTitle>
    </>
  ),
};
