import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './uiSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { catApi } from './catApiSlice';
// ...
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
