import type { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from 'components';
import { Cell } from 'components/Blocks/Cell/Cell';
import { Radio } from './Radio';

const meta = {
  title: 'Form/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=radio, see usage example on the With Cell page">
      <Radio {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const WithCells: Story = {
  render: (args) => (
    <form>
      <Cell
        Component="label"
        before={<Radio name="radio" value="1" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        First radio
      </Cell>
      <Cell
        Component="label"
        before={<Radio name="radio" value="2" {...args} />}
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Second radio
      </Cell>
    </form>
  ),
} satisfies Story;
