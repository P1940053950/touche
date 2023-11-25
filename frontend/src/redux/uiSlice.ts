// Import createSlice and configureStore from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { SchedulerDataArray, User } from '../components/Beds/types';
import { Resource } from '@devexpress/dx-react-scheduler';

interface State {
  appointments: SchedulerDataArray;
  selectedUser: User | null;
  users: User[];
  machines: Resource;
}
const initialState: State = {
  appointments: [
    {
      id: 1,
      startDate: new Date('2023-11-25T09:45'),
      endDate: new Date('2023-11-25T11:00'),
      title: 'Meeting',
      machine: 'TB1',
    },
    {
      id: 2,
      startDate: new Date('2023-11-25T12:00'),
      endDate: new Date('2023-11-25T13:30'),
      title: 'Go to a gym',
      machine: 'TB2',
    },
    {
      id: 3,
      startDate: new Date('2023-11-25T11:32'),
      endDate: new Date('2023-11-25T12:29'),
      title: 'Drink with friends 🍻',
      machine: 'U',
    },
    {
      id: 4,
      startDate: new Date('2023-11-25T11:32'),
      endDate: new Date('2023-11-25T11:31'),
      title: 'Drinks 🍻',
      machine: 'U',
    },
    {
      id: 5,
      startDate: new Date('2023-11-25T14:00'),
      endDate: new Date('2023-11-25T13:30'),
      title: 'Running',
      machine: 'TB2',
    },
  ],
  selectedUser: null as User | null,
  users: [
    {
      id: 'User1',
      label: 'User 1',
      value: 'user1',
      phoneNumber: '123-456-7890',
      email: 'user1@example.com',
      cancerType: 'Lung Cancer',
    },
    {
      id: 'User2',
      label: 'User 2',
      value: 'user2',
      phoneNumber: '987-654-3210',
      email: 'user2@example.com',
      cancerType: 'Breast Cancer',
    },
    // Add more users as needed
  ],
  machines: {
    fieldName: 'machine',
    title: 'Radiation Machines',
    instances: [
      { id: 'TB1', text: 'TB1' },
      { id: 'TB2', text: 'TB2' },
      { id: 'VB1', text: 'VB1' },
      { id: 'VB2', text: 'VB2' },
      { id: 'U', text: 'U' },
    ],
  },
};

// Create a slice for the counter
export const uiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateAppointments: (state, action) => {
      const { added, changed, deleted } = action.payload;
      console.log('added', state.appointments);
      if (added) {
        const startingAddedId =
          state.appointments.length > 0
            ? state.appointments[state.appointments.length - 1].id + 1
            : 0;
        state.appointments = [
          ...state.appointments,
          { id: startingAddedId, ...added },
        ];
      }
      if (changed) {
        state.appointments = state.appointments.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment,
        );
      }
      if (deleted !== undefined) {
        state.appointments = state.appointments.filter(
          (appointment) => appointment.id !== deleted,
        );
      }
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { updateAppointments, selectUser, updateUsers } = uiSlice.actions;
