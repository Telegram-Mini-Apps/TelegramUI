import type { Meta, StoryObj } from '@storybook/react';

import { CircularProgress } from './CircularProgress';

const meta = {
  title: 'Feedback/CircularProgress',
  component: CircularProgress,
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <>
      <CircularProgress size="small" progress={10} {...args} /> <br />
      <CircularProgress size="medium" progress={50} {...args} /> <br />
      <CircularProgress size="large" progress={80} {...args} /> <br />
    </>
  ),
  decorators: [
    (StoryComponent) => (
      <div style={{
        display: 'flex',
        gap: 20,
      }}>
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Story;
