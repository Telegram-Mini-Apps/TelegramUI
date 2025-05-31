import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Chat } from 'icons/28/chat';
import { Icon28Devices } from 'icons/28/devices';
import { Icon28Stats } from 'icons/28/stats';

import type { TabbarProps } from './Tabbar';
import { Tabbar } from './Tabbar';

const meta = {
  title: 'Layout/Tabbar',
  component: Tabbar,
} satisfies Meta<typeof Tabbar>;

export default meta;

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Devices',
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Chat',
  },
  {
    id: 2,
    Icon: Icon28Stats,
    text: 'Stats',
  },
];

export const Playground: StoryObj<TabbarProps> = {
  render: () => {
    const [currentTab, setCurrentTab] = useState(tabs[0]!.id);

    return (
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={id === currentTab}
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
    );
  },
  decorators: [
    (Story) => (
      <div style={{ height: 100 }}>
        <Story />
      </div>
    ),
  ],
};
