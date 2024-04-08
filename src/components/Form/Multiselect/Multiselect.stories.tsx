import { useState } from 'react';

import { Decorator, Meta, StoryObj } from '@storybook/react';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Section } from 'components';
import { List } from 'components/Blocks/List/List';
import { MultiselectOption } from 'components/Form/Multiselect/types';
import { Multiselect, MultiselectProps } from './Multiselect';

const meta = {
  title: 'Form/Multiselect',
  component: Multiselect,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    ...hideControls('options', 'before', 'renderOption', 'value', 'defaultValue', 'filterFn', 'creatable'),
    ...setControlsTypes(['header'], 'text'),
  },
} satisfies Meta<typeof Multiselect>;

export default meta;

const PLATFORM_OPTIONS: MultiselectOption[] = [
  { value: 'mac', label: 'macOS' },
  { value: 'linux', label: 'Linux' },
  { value: 'windows', label: 'Windows' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
  { value: 'web', label: 'Web' },
  { value: 'other', label: 'Other' },
];

const decorator: Decorator = (Story) => (
  <List style={{ background: 'var(--tgui--secondary_bg_color)', minHeight: '360px' }}>
    <Story />
  </List>
);

const StoryBookComponent = (props: MultiselectProps & { sectionHeader: string }) => {
  const [value, setValue] = useState<MultiselectOption[]>([]);
  const { sectionHeader, ...multiselectProps } = props;

  return (
    <Section header={sectionHeader}>
      <Multiselect
        header="Platforms"
        {...multiselectProps}
        placeholder="Select platform"
        options={PLATFORM_OPTIONS}
        value={value}
        onChange={(newOptions) => setValue(newOptions)}
      />
    </Section>
  );
};

export const Pick: StoryObj<MultiselectProps> = {
  render: (props) => <StoryBookComponent sectionHeader="Pick from existed options" {...props} />,
  decorators: [decorator],
};

export const PickAndHideDropdown: StoryObj<MultiselectProps> = {
  args: {
    closeDropdownAfterSelect: true,
  },
  render: (props) => <StoryBookComponent sectionHeader="Pick from existed options and hide" {...props} />,
  decorators: [decorator],
};

export const CreateOptionInInput: StoryObj<MultiselectProps> = {
  args: {
    creatable: 'Create new platform',
  },
  render: (props) => <StoryBookComponent sectionHeader="Type something inside and press enter or option in list" {...props} />,
  decorators: [decorator],
};
