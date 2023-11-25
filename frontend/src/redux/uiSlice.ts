// Import createSlice and configureStore from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [
    {
      id: 1,
      startDate: new Date('2023-11-25T09:45'),
      endDate: new Date('2023-11-25T11:00'),
      title: 'Meeting',
    },
    {
      id: 2,
      startDate: new Date('2023-11-25T12:00'),
      endDate: new Date('2023-11-25T13:30'),
      title: 'Go to a gym',
    },
    {
      id: 3,
      startDate: new Date('2023-11-25T11:32'),
      endDate: new Date('2023-11-25T12:29'),
      title: 'Drink with friends 🍻',
    },
    {
      id: 4,
      startDate: new Date('2023-11-25T11:32'),
      endDate: new Date('2023-11-25T11:31'),
      title: 'Drinks 🍻',
    },
  ],
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
  },
});

export const { updateAppointments } = uiSlice.actions;
