import type { Meta, StoryObj } from '@storybook/react';

import { Placeholder } from 'components';
import { Cell } from 'components/Blocks/Cell/Cell';
import { Selectable } from './Selectable';

const meta = {
  title: 'Form/Selectable',
  component: Selectable,
} satisfies Meta<typeof Selectable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Placeholder description="This component wraps input with type=radio, see usage example on the With Cell page">
      <Selectable {...args} />
    </Placeholder>
  ),
} satisfies Story;

export const WithCell: Story = {
  render: () => (
    <form>
      <Cell
        Component="label"
        before={
          <Selectable
            defaultChecked
            name="group"
            value="1"
          />
        }
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        First radio
      </Cell>
      <Cell
        Component="label"
        before={
          <Selectable
            name="group"
            value="2"
          />
        }
        description="Pass Component='label' to Cell to make it clickable."
        multiline
      >
        Second radio
      </Cell>
    </form>
  ),
} satisfies Story;
