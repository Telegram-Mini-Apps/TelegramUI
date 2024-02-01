import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Devices } from 'icons/28/devices';
import { hideControls } from 'storybook/controls';

import { TabbarItem, TabbarItemProps } from './TabbarItem';

const meta = {
  title: 'Layout/Tabbar/Tabbar.Item',
  component: TabbarItem,
  argTypes: hideControls('children'),
} satisfies Meta<typeof TabbarItem>;

export default meta;

export const Playground: StoryObj<TabbarItemProps> = {
  args: {
    text: 'Hello',
    children: <Icon28Devices />,
  },
};

