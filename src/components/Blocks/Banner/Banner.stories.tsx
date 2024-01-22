import type { Meta, StoryObj } from '@storybook/react';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Button } from 'components';
import { Image as UIImage } from 'components/Blocks/Image/Image';
import { List } from 'components/Blocks/List/List';
import { Banner } from './Banner';

const meta = {
  title: 'Blocks/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...hideControls('before', 'children', 'onCloseIcon', 'background'),
    ...setControlsTypes(['header', 'subheader', 'description'], 'text'),
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'section',
    before: <UIImage size={48} />,
    header: 'Introducing TON Space',
    subheader: 'Start exploring TON in a new, better way',
    children: (
      <>
        <Button size="s">Try it out</Button>
        <Button size="s" mode="plain">Maybe later</Button>
      </>
    ),
    onCloseIcon: () => console.log('onCloseIcon'),
  },
  decorators: [
    (StoryComponent) => (
      <List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <StoryComponent />
      </List>
    ),
  ],
} satisfies Story;

export const Image: Story = {
  args: {
    type: 'section',
    header: 'Introducing TON Space',
    subheader: 'Start exploring TON in a new, better way',
    background: (
      <img
        alt="Nasa streams"
        style={{ width: '150%' }}
        src="https://www.nasa.gov/wp-content/uploads/2023/10/streams.jpg?resize=1536,864"
      />
    ),
    children: <Button size="s" mode="white">Try it out</Button>,
  },
  decorators: [
    (StoryComponent) => (
      <List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <StoryComponent />
      </List>
    ),
  ],
} satisfies Story;

