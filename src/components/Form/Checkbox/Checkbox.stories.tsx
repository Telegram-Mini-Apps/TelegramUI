import type { Meta, StoryObj } from '@storybook/react';

import { Cell, Placeholder } from 'components';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=checkbox, see usage example on the With Cell page">
      <Checkbox {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const WithCells: Story = {
  render: (args) => (
    <>
      <Cell
        Component="label"
        before={<Checkbox name="checkbox" value="1" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Apples
      </Cell>
      <Cell
        Component="label"
        before={<Checkbox name="checkbox" value="2" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Milk
      </Cell>
    </>
  ),
} satisfies Story;
