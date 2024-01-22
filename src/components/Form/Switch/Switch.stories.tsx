import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta = {
  title: 'Form/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '6px' }}>
      <Switch {...args} /> <br />
      <Switch defaultChecked {...args} /> <br />
      <Switch disabled {...args} /> <br />
      <Switch disabled checked {...args} /> <br />
    </div>
  ),
} satisfies Story;
