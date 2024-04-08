import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Spinner, SpinnerProps } from './Spinner';

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  argTypes: hideControls('size'),
} satisfies Meta<typeof Spinner>;

export default meta;

export const Playground: StoryObj<SpinnerProps> = {
  render: (args) => (
    <div style={{
      width: '400px',
      border: '1px dashed #9747FF',
      borderRadius: '5px',
      padding: '20px',
    }}>
      <Spinner {...args} size="s" /> <br />
      <Spinner {...args} size="m" /> <br />
      <Spinner {...args} size="l" /> <br />
    </div>
  ),
};
