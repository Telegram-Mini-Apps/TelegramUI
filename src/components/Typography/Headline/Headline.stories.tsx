import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Headline } from './Headline';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: hideControls('Component'),
} satisfies Meta<typeof Headline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    plain: false,
  },
  render: (args) => (
    <>
      <Headline weight="3" {...args}>
        Headline · Regular
      </Headline>
      <Headline weight="2" {...args}>
        Headline · Semibold
      </Headline>
      <Headline weight="1" {...args}>
        Headline · Bold
      </Headline>
    </>
  ),
};
