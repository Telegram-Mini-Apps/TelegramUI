import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { PinInput } from './PinInput';

const meta = {
  title: 'Form/PinInput',
  component: PinInput,
  argTypes: hideControls('value'),
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  decorators: [
    (Component) => (
      <div style={{ height: '600px' }}>
        <Component />
      </div>
    ),
  ],
} satisfies Story;
