import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  title: 'Hospital/Page',
  component: Page,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Day: Story = {
  args: {
    topLeft: <div>Top Left</div>,
    topRight: <div>Top Right</div>,
    bottomLeft: <div>Bottom Left</div>,
    bottomRight: <div>Bottom Right</div>,
  },
};
