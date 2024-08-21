import type { Meta, StoryObj } from '@storybook/react';
import { Icon16Cancel } from 'icons/16/cancel';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Avatar } from 'components/Blocks/Avatar/Avatar';
import { List } from 'components/Blocks/List/List';
import { Radio } from 'components/Form/Radio/Radio';
import { Chip } from './Chip';

const meta = {
  title: 'Form/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...hideControls('before', 'after'),
    ...setControlsTypes(['children'], 'text'),
    ...hideControls('Component'),
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

const chips = ['Chip', '\'n\'', 'Dale'];

export const Playground: Story = {
  render: (args) => (
    <List
      style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20 }}
    >
      <div style={{ display: 'flex', gap: 16 }}>
        {chips.map((text) => (
          <Chip key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {chips.map((text) => (
          <Chip mode="mono" key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {chips.map((text) => (
          <Chip mode="outline" key={text} {...args}>
            {text}
          </Chip>
        ))}
      </div>
    </List>
  ),
} satisfies Story;

export const WithAfter: Story = {
  render: () => (
    <List
      style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20 }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <Chip mode="elevated" after={<Icon16Cancel />}>
          Elevated
        </Chip>
        <Chip mode="mono" after={<Icon16Cancel />}>
          Mono
        </Chip>
        <Chip mode="outline" after={<Icon16Cancel />}>
          Outline
        </Chip>
      </div>
    </List>
  ),
};

export const WithBefore: Story = {
  render: () => (
    <List
      style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20 }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <Chip mode="elevated" before={<Avatar size={20} />}>
          Elevated
        </Chip>
        <Chip mode="mono" before={<Avatar size={20} />}>
          Mono
        </Chip>
        <Chip mode="outline" before={<Avatar size={20} />}>
          Outline
        </Chip>
      </div>
    </List>
  ),
};

export const WithRadioBefore: Story = {
  render: () => (
    <List
      style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20 }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <Chip
          mode="elevated"
          Component="label"
          before={<Radio name="test" defaultChecked />}
        >
          Elevated
        </Chip>
        <Chip mode="mono" Component="label" before={<Radio name="test" />}>
          Mono
        </Chip>
        <Chip mode="outline" Component="label" before={<Radio name="test" />}>
          Outline
        </Chip>
      </div>
    </List>
  ),
};
