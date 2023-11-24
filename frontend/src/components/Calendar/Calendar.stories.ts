import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta = {
  title: 'Hospital/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Day: Story = {
  args: {
    currentDate: new Date('2018-11-01'),
    viewType: 'day',
    schedulerData: [
      {
        startDate: new Date('2018-11-01T09:45'),
        endDate: new Date('2018-11-01T11:00'),
        title: 'Meeting',
      },
      {
        startDate: new Date('2018-11-01T11:32'),
        endDate: new Date('2018-11-01T12:29'),
        title: 'Drink with friends 🍻',
      },
      {
        startDate: new Date('2018-11-01T12:00'),
        endDate: new Date('2018-11-01T13:30'),
        title: 'Go to a gym',
      },
    ],
  },
};

export const Week: Story = {
  args: {
    currentDate: new Date('2018-11-01'),
    viewType: 'week',
    schedulerData: [
      {
        startDate: new Date('2018-11-01T09:45'),
        endDate: new Date('2018-11-01T11:00'),
        title: 'Meeting',
      },
      {
        startDate: new Date('2018-11-01T12:00'),
        endDate: new Date('2018-11-01T13:30'),
        title: 'Go to a gym',
      },
      {
        startDate: new Date('2018-11-01T11:32'),
        endDate: new Date('2018-11-01T12:29'),
        title: 'Drink with friends 🍻',
      },
      {
        startDate: new Date('2018-11-01T11:32'),
        endDate: new Date('2018-11-02T11:31'),
        title: 'Drinks 🍻',
      },
    ],
  },
};

export const Month: Story = {
  args: {
    currentDate: new Date('2018-11-01'),
    viewType: 'month',
    schedulerData: [
      {
        startDate: new Date('2018-11-01T09:45'),
        endDate: new Date('2018-11-01T11:00'),
        title: 'Meeting',
      },
      {
        startDate: new Date('2018-11-01T12:00'),
        endDate: new Date('2018-11-01T13:30'),
        title: 'Go to a gym',
      },
      {
        startDate: new Date('2018-11-01T10:12'),
        endDate: new Date('2018-11-08T18:29'),
        title: 'Drink with friends 🍻',
      },
      {
        title: 'Vacation',
        startDate: new Date(2018, 11, 1),
        endDate: new Date(2018, 11, 2),
      },
    ],
  },
};
