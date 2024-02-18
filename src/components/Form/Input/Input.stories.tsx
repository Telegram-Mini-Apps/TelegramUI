import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Icon24Close } from 'icons/24/close';

import { Tappable } from 'components';
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
  render: () => {
    const [value, setValue] = useState('');

    return (
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
        <Input
          disabled
          header="Input"
          placeholder="I am disabled input"
        />
        <Input
          status="focused"
          header="Input"
          placeholder="Write and clean me"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          after={(
            <Tappable
              Component="div"
              style={{ display: 'flex' }}
              onClick={() => setValue('')}
            >
              <Icon24Close />
            </Tappable>
          )}
        />
      </List>
    );
  },
} satisfies Story;

