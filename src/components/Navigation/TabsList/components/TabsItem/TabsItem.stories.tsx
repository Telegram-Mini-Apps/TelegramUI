import type { Meta, StoryObj } from '@storybook/react';

import type { TabsItemProps } from './TabsItem';
import { TabsItem } from './TabsItem';

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
