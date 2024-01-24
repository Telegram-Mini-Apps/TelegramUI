import type { Meta, StoryObj } from '@storybook/react';
import { setControlsTypes } from 'storybook/controls';

import { SectionFooter } from './SectionFooter';

const meta = {
  title: 'Blocks/Section/Section.Footer',
  component: SectionFooter,
  argTypes: setControlsTypes(['children'], 'text'),
} satisfies Meta<typeof SectionFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'SectionFooter',
  },
  decorators: [
    (StoryComponent) => (
      <div style={{ background: 'var(--tgui--secondary_bg_color)' }}>
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Story;
