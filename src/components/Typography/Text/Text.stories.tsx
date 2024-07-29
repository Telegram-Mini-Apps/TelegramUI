import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Text } from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  argTypes: hideControls('Component'),
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <>
      <Text weight="3" {...args}>
        Text · Regular
      </Text>
      <br /><br />
      <Text weight="2" {...args}>
        Text · Semibold
      </Text>
      <br /><br />
      <Text weight="1" {...args}>
        Text · Bold
      </Text>
    </>
  ),
};
