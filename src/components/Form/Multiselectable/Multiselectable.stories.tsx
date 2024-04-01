import type { Meta, StoryObj } from '@storybook/react';

import { Cell, Placeholder } from 'components';
import { Multiselectable } from './Multiselectable';

const meta = {
  title: 'Form/Multiselectable',
  component: Multiselectable,
} satisfies Meta<typeof Multiselectable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=checkbox, see usage example on the With Cell page">
      <Multiselectable {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const WithCell: Story = {
  render: (args) => (
    <form>
      <Cell
        Component="label"
        before={<Multiselectable name="multiselect" value="1" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Multiselect in cell 1
      </Cell>
      <Cell
        Component="label"
        before={<Multiselectable name="multiselect" value="2" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Multiselect in cell 2
      </Cell>
    </form>
  ),
} satisfies Story;
