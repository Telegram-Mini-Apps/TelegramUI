import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Caption } from './Caption';

const meta = {
  title: 'Typography/Caption',
  component: Caption,
  argTypes: hideControls('Component'),
} satisfies Meta<typeof Caption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Caption1: Story = {
  args: {
    level: '1',
  },
  render: (args) => (
    <>
      <Caption weight="3" {...args}>
        Caption 1 · Regular
      </Caption>
      <br /><br />
      <Caption weight="2" {...args}>
        Caption 1 · Semibold
      </Caption>
      <br /><br />
      <Caption weight="1" {...args}>
        Caption 1 · Bold
      </Caption>
    </>
  ),
};

export const Caption2: Story = {
  args: {
    level: '2',
  },
  render: (args) => (
    <>
      <Caption weight="3" {...args}>
        Caption 2 · Regular
      </Caption>
      <br /><br />
      <Caption weight="2" {...args}>
        Caption 2 · Semibold
      </Caption>
      <br /><br />
      <Caption weight="1" {...args}>
        Caption 2 · Bold
      </Caption>
    </>
  ),
};
