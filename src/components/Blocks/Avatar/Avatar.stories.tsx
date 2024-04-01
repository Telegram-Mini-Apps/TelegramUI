import type { Meta, StoryObj } from '@storybook/react';
import { Icon12Quote } from 'icons/12/quote';
import { Icon28Stats } from 'icons/28/stats';
import { hideControls } from 'storybook/controls';

import { Avatar } from './Avatar';

const meta = {
  title: 'Blocks/Avatar',
  component: Avatar,
  argTypes: hideControls('fallbackIcon', 'children'),
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidImage: Story = {
  args: {
    size: 96,
    src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
  },
} satisfies Story;

export const InvalidImage: Story = {
  args: {
    size: 96,
    src: 'https://avatars.gitontent.com/u/84640980?v=4',
  },
} satisfies Story;

export const WithFallback: Story = {
  args: {
    size: 96,
    src: 'https://avatars.gitontent.com/u/84640980?v=4',
    fallbackIcon: <span>😕</span>,
  },
} satisfies Story;

export const WithBadge: Story = {
  args: {
    size: 48,
    src: 'https://avatars.githubusercontent.com/u/84640980?v=4',
    fallbackIcon: <span>😕</span>,
    children: <Avatar.Badge type="number" large>42</Avatar.Badge>,
  },
} satisfies Story;

export const WithAcronym: Story = {
  args: {
    size: 96,
    acronym: 'IS',
  },
} satisfies Story;

export const WithChildren: Story = {
  args: {
    size: 48,
    children: <Icon28Stats />,
  },
  render: (props) => (
    <Avatar {...props}>
      {(props?.size || 0) <= 28 ? <Icon12Quote /> : <Icon28Stats />}
    </Avatar>
  ),
} satisfies Story;
