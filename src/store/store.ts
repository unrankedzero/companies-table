import { configureStore, Store } from '@reduxjs/toolkit';
import companiesReducer from './slices/companiesSlice';

const store: Store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;