import { Decorator } from '@storybook/react';

export const AppearanceDecorator: Decorator = (Story, context) => {
  const styles = `
    .AppearanceDecorator::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: ${context.globals.theme === 'dark' ? '#212121' : '#FFF'}
    }
  `;

  return (
    <div className="AppearanceDecorator">
      <style>{styles}</style>
      <Story />
    </div>
  );
}
