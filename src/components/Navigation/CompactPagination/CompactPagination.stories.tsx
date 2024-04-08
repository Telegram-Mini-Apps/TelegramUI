import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { CompactPagination, CompactPaginationProps } from './CompactPagination';

const meta = {
  title: 'Navigation/CompactPagination',
  component: CompactPagination,
  argTypes: hideControls('children'),
} satisfies Meta<typeof CompactPagination>;

export default meta;

const paginationItems = Array.from({ length: 8 }, (_, i) => i + 1);

export const Playground: StoryObj<CompactPaginationProps> = {
  render: (args) => {
    const [selected, setSelected] = useState(1);

    return (
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 20,
        background: args.mode === 'white' ? 'var(--tgui--black)' : 'var(--tgui--secondary_bg_color)',
      }}>
        <CompactPagination {...args}>
          {paginationItems.map((item) => (
            <CompactPagination.Item
              key={item}
              onClick={() => setSelected(item)}
              selected={item === selected}
            >
              {item}
            </CompactPagination.Item>
          ))}
        </CompactPagination>
      </div>
    );
  },
};
