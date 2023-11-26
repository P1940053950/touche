import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './uiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { api } from './apiSlice';
// ...
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
