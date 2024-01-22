import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Section } from 'components';
import { Input } from 'components/Form';
import { List } from './List';

const meta = {
  title: 'Blocks/List',
  component: List,
  argTypes: hideControls('children'),
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const PreparedSection = () => (
  <Section
    header="Personal Information"
    footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
  >
    <Input
      header="First name"
      placeholder="21 y.o. designer from San Francisco"
    />
  </Section>
);

export const Playground: Story = {
  args: {},
  render: () => (
    <List>
      <List style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <PreparedSection />
        <PreparedSection />
        <PreparedSection />
      </List>
    </List>
  ),
} satisfies Story;
