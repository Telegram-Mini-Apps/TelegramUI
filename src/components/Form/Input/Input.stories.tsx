import type { Meta, StoryObj } from '@storybook/react';

import { List } from 'components/Blocks/List/List';
import { Input } from './Input';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <List style={{ background: 'var(--tgui--secondary_bg_color)', width: 500 }}>
      <Input
        header="Input"
        placeholder="I am usual input, just leave me alone"
      />
      <Input
        status="error"
        header="Input"
        placeholder="I am error input, don't make my mistakes..."
      />
      <Input
        status="focused"
        header="Input"
        placeholder="I am focused input, are u focused on me?"
      />
    </List>
  ),
} satisfies Story;

