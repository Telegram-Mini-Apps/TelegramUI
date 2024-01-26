import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from 'components/Blocks/Cell/Cell';
import { Selectable } from './Selectable';

const meta = {
  title: 'Form/Selectable',
  component: Selectable,
} satisfies Meta<typeof Selectable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <form>
      <Cell
        Component="label"
        before={<Selectable defaultChecked name="group" value="1" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        First radio
      </Cell>
      <Cell
        Component="label"
        before={<Selectable name="group" value="2" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        Second radio
      </Cell>
    </form>
  ),
} satisfies Story;