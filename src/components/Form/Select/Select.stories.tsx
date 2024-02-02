import type { Meta, StoryObj } from '@storybook/react';

import { List } from 'components/Blocks/List/List';
import { Select, SelectProps } from './Select';

const meta = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Select>;

export default meta;

export const Playground: StoryObj<SelectProps> = {
  render: () => (
    <List style={{ background: 'var(--tgui--secondary_bg_color)', width: 500 }}>
      <Select
        header="Select"
        placeholder="I am usual input, just leave me alone"
      >
        <option>Hello</option>
        <option>Okay</option>
      </Select>
    </List>
  ),
};

