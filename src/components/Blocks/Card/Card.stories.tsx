import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'Blocks/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: 20 }}>
      <Card style={{ height: 200, width: 200 }} />
      <Card type="ambient" style={{ height: 200, width: 200 }} />
    </div>
  ),
} satisfies Story;
