import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from 'components/Blocks/Cell/Cell';
import { Radio } from './Radio';

const meta = {
  title: 'Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <form>
      <Cell
        Component="label"
        before={<Radio name="radio" value="1" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        First radio
      </Cell>
      <Cell
        Component="label"
        before={<Radio name="radio" value="2" />}
        description="Pass Component='label' to Cell to make it clickable."
      >
        Second radio
      </Cell>
    </form>
  ),
} satisfies Story;
