import type { Meta, StoryObj } from '@storybook/react';
import { setControlsTypes } from 'storybook/controls';

import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'Blocks/Section/Section.Header',
  component: SectionHeader,
  argTypes: setControlsTypes(['children'], 'text'),
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <>
      <SectionHeader {...args}>{args.children || 'Usual title'}</SectionHeader>
      <SectionHeader large {...args}>{args.children || 'Large title'}</SectionHeader>
    </>
  ),
} satisfies Story;
