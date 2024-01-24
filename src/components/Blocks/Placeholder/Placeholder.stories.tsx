import styles from './Placeholder.stories.module.css';

import type { Meta, StoryObj } from '@storybook/react';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Button } from 'components';
import { Placeholder } from './Placeholder';

const meta = {
  title: 'Blocks/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...hideControls('children', 'action'),
    ...setControlsTypes(['header', 'description'], 'text'),
  },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <img
        alt="Telegram sticker"
        src="https://xelene.me/telegram.gif"
        className={styles.sticker}
      />
    ),
    header: 'Title',
    description: 'Description',
  },
  render: (args) => (
    <div className={styles.placeholderWrapper}>
      <Placeholder {...args} />
    </div>
  ),
} satisfies Story;

export const WithAction: Story = {
  args: {
    ...Playground.args,
    action: (
      <Button stretched size="l">
        Action
      </Button>
    ),
  },
  render: Playground.render,
} satisfies Story;

export const HeaderAndDescription: Story = {
  args: {
    children: Playground.args?.children,
    description: 'Only you can see archived stories unless you choose to post them to your profile.',
  },
  render: Playground.render,
};
