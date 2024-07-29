import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Title } from './Title';

const meta = {
  title: 'Typography/Title',
  component: Title,
  argTypes: hideControls('Component'),
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title1: Story = {
  args: {
    level: '1',
    plain: false,
  },
  render: (args) => (
    <>
      <Title weight="3" {...args}>
        Title 1 · Regular
      </Title>
      <Title weight="2" {...args}>
        Title 1 · Semibold
      </Title>
      <Title weight="1" {...args}>
        Title 1 · Bold
      </Title>
    </>
  ),
};

export const Title2: Story = {
  args: {
    level: '2',
    plain: false,
  },
  render: (args) => (
    <>
      <Title weight="3" {...args}>
        Title 2 · Regular
      </Title>
      <Title weight="2" {...args}>
        Title 2 · Semibold
      </Title>
      <Title weight="1" {...args}>
        Title 2 · Bold
      </Title>
    </>
  ),
};

export const Title3: Story = {
  args: {
    level: '3',
    plain: false,
  },
  argTypes: {
    Component: {
      control: {
        disable: false,
      },
    },
  },
  render: (args) => (
    <>
      <Title weight="3" {...args}>
        Title 3 · Regular
      </Title>
      <Title weight="2" {...args}>
        Title 3 · Semibold
      </Title>
      <Title weight="1" {...args}>
        Title 3 · Bold
      </Title>
    </>
  ),
};
