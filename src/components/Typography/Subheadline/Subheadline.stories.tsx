import type { Meta, StoryObj } from '@storybook/react';

import { Subheadline } from './Subheadline';

const meta = {
  title: 'Typography/Subheadline',
  component: Subheadline,
  parameters: {
    controls: {
      exclude: 'Component',
    },
  },
} satisfies Meta<typeof Subheadline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Subheadline1: Story = {
  args: {
    level: '1',
    plain: false,
  },
  render: (args) => (
    <>
      <Subheadline weight="1" {...args}>
        Subheadline 1 · Regular
      </Subheadline>
      <Subheadline weight="2" {...args}>
        Subheadline 1 · Semibold
      </Subheadline>
      <Subheadline weight="3" {...args}>
        Subheadline 1 · Bold
      </Subheadline>
    </>
  ),
};

export const Subheadline2: Story = {
  args: {
    level: '2',
    plain: false,
  },
  render: (args) => (
    <>
      <Subheadline weight="1" {...args}>
        Subheadline 2 · Regular
      </Subheadline>
      <Subheadline weight="2" {...args}>
        Subheadline 2 · Semibold
      </Subheadline>
      <Subheadline weight="3" {...args}>
        Subheadline 2 · Bold
      </Subheadline>
    </>
  ),
};
