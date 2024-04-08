import type { Meta, StoryObj } from '@storybook/react';

import { Subheadline } from 'components';
import CellMeta from 'components/Blocks/Cell/Cell.stories';
import { Section } from 'components/Blocks/Section/Section';
import { Accordion } from '../../Accordion';
import { AccordionSummary, AccordionSummaryProps } from './AccordionSummary';

const meta = {
  title: 'Blocks/Accordion/Accordion.Summary',
  component: AccordionSummary,
  argTypes: CellMeta.argTypes,
} satisfies Meta<typeof AccordionSummary>;

export default meta;

export const Playground: StoryObj<AccordionSummaryProps> = {
  args: {
    children: 'Accordion.Summary',
  },
  render: (args) => <Accordion.Summary {...args} />,
  decorators: [
    (Story) => (
      <Section style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20, width: 358 }}>
        <Accordion expanded onChange={console.log}>
          <Story />
          <Accordion.Content>
            <Subheadline style={{ padding: '12px 24px 24px' }} level="2">
              Accordion.Summary is Cell component, you can pass all the same props from Cell to it.
            </Subheadline>
          </Accordion.Content>
        </Accordion>
      </Section>
    ),
  ],
};
