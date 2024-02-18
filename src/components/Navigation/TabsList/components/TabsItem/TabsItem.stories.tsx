import type { Meta, StoryObj } from '@storybook/react';

import { TabsItem, TabsItemProps } from './TabsItem';

const meta = {
  title: 'Navigation/TabsList/TabsList.Item',
  component: TabsItem,
} satisfies Meta<typeof TabsItem>;

export default meta;

export const Playground: StoryObj<TabsItemProps> = {
  args: {
    selected: false,
    children: 'This is a TabsList.Item',
  },
};

