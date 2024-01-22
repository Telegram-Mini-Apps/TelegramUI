import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from 'components/Blocks/Cell/Cell';
import { Spoiler } from './Spoiler';

const meta = {
  title: 'Feedback/Spoiler',
  component: Spoiler,
} satisfies Meta<typeof Spoiler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div>
      <Spoiler {...args}>
        <div style={{ width: 200, height: 200, background: 'yellowgreen' }} />
      </Spoiler>
      <br />
      <Spoiler {...args}>
        <Cell description="Pass Component='label' to Cell to make it clickable.">
          First radio
        </Cell>
      </Spoiler>
    </div>
  ),
} satisfies Story;
