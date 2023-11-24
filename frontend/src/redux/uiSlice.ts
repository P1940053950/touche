// Import createSlice and configureStore from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
const initialState = { count: 0 };

// Create a slice for the counter
export const uiSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = uiSlice.actions;
