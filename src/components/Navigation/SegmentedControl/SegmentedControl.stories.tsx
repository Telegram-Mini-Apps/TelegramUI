import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import type { SegmentedControlProps } from './SegmentedControl';
import { SegmentedControl } from './SegmentedControl';

const meta = {
  title: 'Navigation/SegmentedControl',
  component: SegmentedControl,
  argTypes: hideControls('children'),
} satisfies Meta<typeof SegmentedControl>;

export default meta;

const labels = [
  {
    label: 'Label',
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

export const Playground: StoryObj<SegmentedControlProps> = {
  render: args => {
    const [selected, setSelected] = useState(labels[0]!.value);

    return (
      <SegmentedControl {...args}>
        {labels.map(({ value, label }) => (
          <SegmentedControl.Item
            key={value}
            selected={selected === value}
            onClick={() => setSelected(value)}
          >
            {label}
          </SegmentedControl.Item>
        ))}
      </SegmentedControl>
    );
  },
  decorators: [
    Component => (
      <div style={{ width: 500 }}>
        <Component />
      </div>
    ),
  ],
};
