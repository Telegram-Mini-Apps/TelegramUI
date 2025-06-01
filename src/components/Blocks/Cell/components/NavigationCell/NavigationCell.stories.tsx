import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Stats } from 'icons/28/stats';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { NavigationCell } from './NavigationCell';

const meta = {
  title: 'Blocks/Cell/NavigationCell',
  component: NavigationCell,
  argTypes: {
    ...hideControls('before', 'after', 'titleBadge', 'icon'),
    ...setControlsTypes(
      ['Component', 'subhead', 'subtitle', 'children', 'hint', 'description'],
      'text'
    ),
  },
} satisfies Meta<typeof NavigationCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Language',
    color: 'mediumpurple',
    icon: <Icon28Stats />,
    after: 'English',
  },
} satisfies Story;
