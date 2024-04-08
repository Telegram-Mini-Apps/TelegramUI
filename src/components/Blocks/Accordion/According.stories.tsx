import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { hideControls } from 'storybook/controls';

import { Blockquote } from 'components/Blocks/Blockquote/Blockquote';
import { Section } from 'components/Blocks/Section/Section';
import { Accordion, AccordionProps } from './Accordion';

const meta = {
  title: 'Blocks/Accordion',
  component: Accordion,
  argTypes: hideControls('children'),
} satisfies Meta<typeof Accordion>;

export default meta;

export const Playground: StoryObj<AccordionProps> = {
  render: (args) => {
    const [expanded, setExpanded] = useState(args.expanded);

    useEffect(() => {
      setExpanded(args.expanded);
    }, [args.expanded]);

    return (
      <Accordion {...args} onChange={() => setExpanded(!expanded)} expanded={expanded}>
        <Accordion.Summary>History of accordion</Accordion.Summary>
        <Accordion.Content>
          <div style={{ padding: '10px 20px 20px' }}>
            <Blockquote>
              The accordion&apos;s basic form is believed to have been invented in Berlin, in 1822,
              by Christian Friedrich Ludwig Buschmann, although one instrument was discovered in 2006
              that appears to have been built earlier. The earliest history of the accordion in Russia is poorly documented.
            </Blockquote>
          </div>
        </Accordion.Content>
      </Accordion>
    );
  },
  decorators: [
    (Story) => (
      <Section style={{ background: 'var(--tgui--secondary_bg_color)', padding: 20, width: 358 }}>
        <Story />
      </Section>
    ),
  ],
};
