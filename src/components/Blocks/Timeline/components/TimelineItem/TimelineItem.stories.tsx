import type { Meta, StoryObj } from '@storybook/react';

import { TimelineItem } from './TimelineItem';

const meta = {
  title: 'Blocks/Timeline/Timeline.Item',
  component: TimelineItem,
} satisfies Meta<typeof TimelineItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    header: 'It\'s my header = header prop',
    children: 'It\'s my description = children prop',
  },
} satisfies Story;
