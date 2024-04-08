import type { Preview } from '@storybook/react';
import { AppearanceDecorator } from './decorators/appearance';
import { AppRootDecorator } from './decorators/root';
import { StrictDecorator } from './decorators/strict';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      source: {
        state: 'open',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    centered: true,
  },
  globalTypes: {
    platform: {
      name: 'Platform',
      description: 'Platform for components',
      defaultValue: 'base',
      toolbar: {
        icon: 'mobile',
        items: ['base', 'ios'],
        title: 'Platform',
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    StrictDecorator,
    AppRootDecorator,
    AppearanceDecorator,
  ],
};

export default preview;
