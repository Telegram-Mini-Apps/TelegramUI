import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Chat } from 'icons/28/chat';
import { Icon28Devices } from 'icons/28/devices';
import { Icon28Stats } from 'icons/28/stats';

import { Cell, List, Section } from 'components';
import { IconContainer } from './IconContainer';

const meta = {
  title: 'Blocks/IconContainer',
  component: IconContainer,
} satisfies Meta<typeof IconContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const cells = [
  {
    id: 1,
    color: 'orange',
    icon: <Icon28Chat />,
    text: 'Chat Settings',
  },
  {
    id: 2,
    color: 'dodgerblue',
    icon: <Icon28Devices />,
    text: 'Data and Storage',
  },
  {
    id: 3,
    color: 'darkgray',
    icon: <Icon28Stats />,
    text: 'Devices',
  },
];

export const Playground: Story = {
  render: (args) => (
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '40px',
        width: 500,
      }}
    >
      <Section
        header="Main Settings"
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
      >
        {cells.map((cell) => (
          <Cell
            key={cell.id}
            before={
              <IconContainer
                color={cell.color}
                {...args}
              >
                {cell.icon}
              </IconContainer>
            }
          >
            {cell.text}
          </Cell>
        ))}
      </Section>
    </List>
  ),
};
