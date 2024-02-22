import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Cell, List, Section } from 'components';
import { FileInput } from './FileInput';

const meta = {
  title: 'Form/FileInput',
  component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [files, setFiles] = useState<FileList | null>(null);

    return (
      <FileInput multiple onChange={(event) => setFiles(event.target.files)} {...args}>
        {files && Array.from(files).map((file) => (
          <Cell key={file.name} subtitle={`${file.size} bytes`}>{file.name}</Cell>
        ))}
      </FileInput>
    );
  },
  decorators: [
    (DecoratorStory) => (
      <List>
        <Section
          header="Component includes only logic of input and label"
          footer="Listen to the onChange event to get the selected files. You can pass children to display the selected files."
        >
          <DecoratorStory />
        </Section>
      </List>
    ),
  ],
} satisfies Story;
