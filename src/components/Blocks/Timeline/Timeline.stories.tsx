import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Timeline } from './Timeline';

const meta = {
  title: 'Blocks/Timeline',
  component: Timeline,
  argTypes: hideControls('children'),
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const TimelineItems = [
  {
    key: '1',
    header: 'Arrived',
    children: 'Yesterday',
  },
  {
    key: '2',
    header: 'Departed',
    children: 'Today',
  },
  {
    key: '3',
    header: 'In transit',
    children: 'Tomorrow',
  },
  {
    key: '4',
    header: 'Processed to delivery center',
    children: 'Next week',
  },
  {
    key: '5',
    header: 'Shipped',
    children: 'Someday',
  },
];

export const Playground: Story = {
  args: {
    active: 2,
    children: TimelineItems.map((item) => (
      <Timeline.Item key={item.key} header={item.header}>
        {item.children}
      </Timeline.Item>
    )),
  },
} satisfies Story;

export const Horizontal: Story = {
  args: {
    horizontal: true,
    ...Playground.args,
  },
} satisfies Story;
