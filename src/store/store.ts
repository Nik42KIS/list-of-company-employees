import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer } from '../employers/employer.slice';

const reducers = combineReducers({
  employers: reducer,
})

export const store = configureStore({
  reducer: reducers,
});
