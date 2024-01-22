import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '6px' }}>
      <Checkbox {...args} /> <br />
      <Checkbox defaultChecked {...args} /> <br />
      <Checkbox defaultChecked indeterminate {...args} /> <br />
      <Checkbox disabled {...args} /> <br />
      <Checkbox disabled defaultChecked {...args} /> <br />
      <Checkbox disabled defaultChecked indeterminate {...args} /> <br />
    </div>
  ),
} satisfies Story;
