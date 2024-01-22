import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from 'components';
import { Multiselectable } from './Multiselectable';

const meta = {
  title: 'Form/Multiselectable',
  component: Multiselectable,
} satisfies Meta<typeof Multiselectable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <form>
      <Cell
        Component="label"
        before={<Multiselectable name="multiselect" value="1" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        Multiselect in cell 1
      </Cell>
      <Cell
        Component="label"
        before={<Multiselectable name="multiselect" value="2" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        Multiselect in cell 2
      </Cell>
    </form>
  ),
} satisfies Story;
