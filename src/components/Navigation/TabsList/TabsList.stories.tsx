import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { TabsList, TabsListProps } from './TabsList';

const meta = {
  title: 'Navigation/TabsList',
  component: TabsList,
  argTypes: hideControls('children'),
} satisfies Meta<typeof TabsList>;

export default meta;

const labels = [
  {
    label: 'Label 1',
    value: 'label',
  },
  {
    label: 'Label 2',
    value: 'label2',
  },
  {
    label: 'Label 3',
    value: 'label3',
  },
];

export const Playground: StoryObj<TabsListProps> = {
  render: (args) => {
    const [selected, setSelected] = useState(labels[0].value);

    return (
      <TabsList {...args}>
        {labels.map(({ value, label }) => (
          <TabsList.Item
            key={value}
            selected={selected === value}
            onClick={() => setSelected(value)}
          >
            {label}
          </TabsList.Item>
        ))}
      </TabsList>
    );
  },
  decorators: [
    (Component) => (
      <div style={{ width: 500 }}>
        <Component />
      </div>
    ),
  ],
};

