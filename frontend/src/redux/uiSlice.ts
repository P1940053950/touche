// Import createSlice and configureStore from Redux Toolkit
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { SchedulerDataArray, User } from '../components/Beds/types';
import { Resource } from '@devexpress/dx-react-scheduler';
import { RootState } from './reducer';

interface State {
  appointments: SchedulerDataArray;
  selectedUser: User | null;
  users: User[];
  userSearchTerm: string;
  machineResources: Resource;
  machineUtilizations: Array<{ date: string } | Record<string, number>>;
}
const initialState: State = {
  appointments: [],
  selectedUser: null as User | null,
  users: [],
  userSearchTerm: '',
  machineResources: {
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
  machineUtilizations: [
    { date: '2023-11-25', TB1: 16.5, TB2: 32, VB1: 16, VB2: 1.5, U: 46.5 },
    { date: '2023-11-26', TB1: 2, TB2: 12, VB1: 2, VB2: 2, U: 6 },
    { date: '2023-11-27', TB1: 38, TB2: 42, VB1: 8, VB2: 3, U: 68 },
    { date: '2023-11-28', TB1: 100, TB2: 1, VB1: 10, VB2: 40, U: 20 },
    { date: '2023-11-29', TB1: 45, TB2: 25, VB1: 45, VB2: 25, U: 46 },
  ],
};

const selectUserSearchTerm = (state: RootState) => state.ui.userSearchTerm;
export const selectSearchedUserResults = createSelector(
  selectUserSearchTerm,
  (state: RootState, users: User[]) => users,
  (searchTerm, users) => {
    return searchTerm !== ''
      ? users?.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.cancer.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ) ?? []
      : users;
  },
);

// Create a slice for the counter
export const uiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateAppointments: (state, action) => {
      const { added, changed, deleted } = action.payload;
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
    addSchedule: (state, action) => {
      const { machine_name } = action.payload.data;
      const alreadyScheduled = state.appointments.find(
        (a) => a.machine === machine_name,
      );
      if (alreadyScheduled) {
        const appointment = state.appointments.find(
          (a) => a.machine === machine_name,
        );
        const currentEndDate = new Date(appointment?.endDate || '');
        currentEndDate.setMinutes(
          currentEndDate.getMinutes() + action.payload.treatmentTimeMinutes,
        );
        appointment!.endDate = currentEndDate.toISOString();
      } else {
        const now = new Date();
        const startDate = now.toISOString();
        now.setMinutes(now.getMinutes() + action.payload.treatmentTimeMinutes);
        const endDate = now.toISOString();
        state.appointments = [
          ...state.appointments,
          {
            id: state.appointments.length,
            startDate: startDate,
            endDate: endDate,
            title: machine_name,
            machine: machine_name,
          },
        ];
      }
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    setUserSearchTerm: (state, action) => {
      state.userSearchTerm = action.payload;
    },
  },
});

export const {
  updateAppointments,
  selectUser,
  updateUsers,
  addSchedule,
  setUserSearchTerm,
} = uiSlice.actions;
