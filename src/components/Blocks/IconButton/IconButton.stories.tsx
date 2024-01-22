import type { Meta, StoryObj } from '@storybook/react';
import { Icon20QuestionMark } from 'icons/20/question_mark';
import { Icon24QR } from 'icons/24/qr';
import { Icon28Stats } from 'icons/28/stats';

import { IconButton } from './IconButton';

const meta = {
  title: 'Blocks/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    size: 's',
    mode: 'bezeled',
  },
  render: (args) => (
    <IconButton
      {...args}
    >
      {args.size === 's' && <Icon20QuestionMark />}
      {args.size === 'm' && <Icon24QR />}
      {args.size === 'l' && <Icon28Stats />}
    </IconButton>
  ),
} satisfies Story;
