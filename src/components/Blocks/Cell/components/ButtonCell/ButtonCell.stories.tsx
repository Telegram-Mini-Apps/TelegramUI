import type { Meta, StoryObj } from '@storybook/react';
import { Icon28AddCircle } from 'icons/28/add_circle';
import { Icon32ProfileColoredSquare } from 'icons/32/profile_colored_square';
import { hideControls } from 'storybook/controls';

import { Cell } from 'components/Blocks/Cell/Cell';
import { List } from 'components/Blocks/List/List';
import { Section } from 'components/Blocks/Section/Section';
import { ButtonCell } from './ButtonCell';

const meta = {
  title: 'Blocks/Cell/ButtonCell',
  component: ButtonCell,
  parameters: {
    layout: 'centered',
  },
  argTypes: hideControls('before', 'after', 'Component'),
} satisfies Meta<typeof ButtonCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    before: <Icon28AddCircle />,
    children: 'Create Ad',
  },
  render: (props) => (
    <List style={{ background: 'var(--tgui--secondary_bg_color)', padding: 10 }}>
      <Section>
        <Cell before={<Icon32ProfileColoredSquare />} subtitle="Manage ads and payment settings">My Ads</Cell>
        <ButtonCell {...props} />
      </Section>
    </List>
  ),
} satisfies Story;
