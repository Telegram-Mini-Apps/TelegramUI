import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Breadcrumbs } from 'components';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  argTypes: hideControls('children'),
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    divider: 'dot',
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>First</Breadcrumbs.Item>
      <Breadcrumbs.Item>Second</Breadcrumbs.Item>
      <Breadcrumbs.Item>Third</Breadcrumbs.Item>
    </Breadcrumbs>
  ),
} satisfies Story;

export const Link: Story = {
  args: {
    divider: 'dot',
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item
        Component="a"
        href="https://nohello.net/en/"
        target="_blank"
        rel="noreferrer"
      >
        No
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        Component="a"
        href="https://nohello.net/en/"
        target="_blank"
        rel="noreferrer"
      >
        Hello
      </Breadcrumbs.Item>
      <Breadcrumbs.Item
        Component="a"
        href="https://nohello.net/en/"
        target="_blank"
        rel="noreferrer"
      >
        OK?
      </Breadcrumbs.Item>
    </Breadcrumbs>
  ),
} satisfies Story;
