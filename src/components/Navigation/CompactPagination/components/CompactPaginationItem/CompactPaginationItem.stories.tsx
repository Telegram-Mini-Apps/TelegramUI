import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Subheadline } from 'components';
import { CompactPaginationItem, CompactPaginationItemProps } from './CompactPaginationItem';

const meta = {
  title: 'Navigation/CompactPagination/CompactPagination.Item',
  component: CompactPaginationItem,
  argTypes: hideControls('children'),
} satisfies Meta<typeof CompactPaginationItem>;

export default meta;

export const Playground: StoryObj<CompactPaginationItemProps> = {
  decorators: [
    (Story) => (
      <>
        <Subheadline>
          CompactPagination.Item is just a child for CompactPagination component, it exists separately for passing area
          labels (It is really just a dot)
        </Subheadline>
        <br />
        <Story />
      </>
    ),
  ],
};
