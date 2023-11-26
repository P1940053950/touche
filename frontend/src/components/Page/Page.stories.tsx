import type { Meta, StoryObj } from '@storybook/react';

import { SchedulePage } from './SchedulePage';

const meta = {
  title: 'Hospital/Page',
  component: SchedulePage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SchedulePage>;

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
