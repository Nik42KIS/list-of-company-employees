import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { employersSlice } from '../employers/employer.slice';

const reducers = combineReducers({
  employers: employersSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
