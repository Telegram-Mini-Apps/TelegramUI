import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Icon28Archive } from 'icons/28/archive';
import { hideControls, setControlsTypes } from 'storybook/controls';

import { Button } from 'components';
import { Link } from 'components/Navigation/Link/Link';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    ...hideControls('before', 'after', 'onClose', 'link'),
    ...setControlsTypes(['description', 'children'], 'text'),
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    before: <Icon28Archive />,
    description: 'Restore the message within 4 seconds',
    children: 'Message deleted',
  },
  render: (args) => {
    const [isDeleteSnackbarShown, setIsDeleteSnackbarShown] = useState(false);
    const [isUndoSnackbarShown, setIsUndoSnackbarShown] = useState(false);

    return (
      <>
        <Button onClick={() => setIsDeleteSnackbarShown(true)} size="m">Show snackbar</Button>
        {isDeleteSnackbarShown && (
          <Snackbar
            {...args}
            after={(
              <Snackbar.Button onClick={() => setIsUndoSnackbarShown(true)}>
                  Undo
              </Snackbar.Button>
            )}
            onClose={() => setIsDeleteSnackbarShown(false)}
          />
        )}
        {isUndoSnackbarShown && (
          <Snackbar
            {...args}
            description="Message returned to the list"
            link={<Link href="https://telegram.org" target="_blank">Open</Link>}
            onClose={() => setIsUndoSnackbarShown(false)}
          >
            Message restored
          </Snackbar>
        )}
      </>
    );
  },
} satisfies Story;
