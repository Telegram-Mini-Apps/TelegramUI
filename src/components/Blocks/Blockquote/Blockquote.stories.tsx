import type { Meta, StoryObj } from '@storybook/react';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Blockquote } from './Blockquote';

const meta = {
  title: 'Blocks/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...hideControls('topRightIcon'),
    ...setControlsTypes(['children'], 'text'),
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'text',
    // eslint-disable-next-line max-len
    children: 'There is grandeur in this view of life, with its several powers, having been originally breathed by the Creator into a few forms or into one; and that, whilst this planet has gone circling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being evolved.',
  },
} satisfies Story;
