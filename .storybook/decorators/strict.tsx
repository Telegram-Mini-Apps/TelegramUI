import { StrictMode } from 'react';
import { Decorator } from '@storybook/react';

export const StrictDecorator: Decorator = (Story) => (
  <StrictMode>
    <Story />
  </StrictMode>
);

