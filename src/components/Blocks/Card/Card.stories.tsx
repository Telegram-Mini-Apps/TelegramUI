import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Card } from './Card';

const meta = {
  title: 'Blocks/Card',
  component: Card,
  argTypes: hideControls('children'),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <Card.Chip readOnly>Hot place</Card.Chip>
        <img
          alt="Dog"
          src="https://i.imgur.com/892vhef.jpeg"
          style={{ display: 'block', width: 254, height: 308, objectFit: 'cover' }}
        />
        <Card.Cell readOnly subtitle="United states">
          New York
        </Card.Cell>
      </>
    ),
  },
} satisfies Story;
