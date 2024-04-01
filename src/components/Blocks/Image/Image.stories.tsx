import type { Meta, StoryObj } from '@storybook/react';
import { Icon12Quote } from 'icons/12/quote';
import { Icon28Stats } from 'icons/28/stats';
import { hideControls } from 'storybook/controls';

import { Image } from './Image';

const meta = {
  title: 'Blocks/Image',
  component: Image,
  argTypes: hideControls('fallbackIcon', 'children'),
} satisfies Meta<typeof Image>;

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
    children: <Image.Badge type="number">42</Image.Badge>,
  },
} satisfies Story;

export const WithChildren: Story = {
  args: {
    size: 48,
    children: <Icon12Quote />,
  },
  render: (props) => (
    <Image {...props}>
      {(props?.size || 0) <= 28 ? <Icon12Quote /> : <Icon28Stats />}
    </Image>
  ),
} satisfies Story;
