import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'components';
import { FixedLayout } from './FixedLayout';

const meta = {
  title: 'Layout/FixedLayout',
  component: FixedLayout,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FixedLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <>
      <FixedLayout vertical="top" style={{ padding: 16 }}>
        <Button size="l" stretched>
          This is FixedLayout with top vertical
        </Button>
      </FixedLayout>
      <FixedLayout style={{ padding: 16 }}>
        <Button size="l" stretched>
          This is FixedLayout with default vertical
        </Button>
      </FixedLayout>
    </>
  ),
} satisfies Story;

