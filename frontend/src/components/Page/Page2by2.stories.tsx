import type { Meta, StoryObj } from '@storybook/react';

import { Page2by2 } from './Page2by2';

const meta = {
  title: 'Hospital/Page',
  component: Page2by2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Page2by2>;

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
