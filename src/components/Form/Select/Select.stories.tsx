import type { Meta, StoryObj } from '@storybook/react';

import { List } from 'components/Blocks/List/List';
import type { SelectProps } from './Select';
import { Select } from './Select';

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
    <List style={{
      width: 240,
      background: 'var(--tgui--secondary_bg_color)',
    }}>
      <Select header="Select">
        <option>Hello</option>
        <option>Okay</option>
      </Select>
    </List>
  ),
};

