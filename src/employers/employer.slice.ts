import { createSlice } from '@reduxjs/toolkit';
import { getEmployersList } from './employer.actions';

const initialState = {
  employers: [],
};

export const employersSlice = createSlice({
  name: 'employers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getEmployersList.fulfilled, (state, action) =>{
      state.employers = action.payload
    })
  }
  },
);

export const { actions, reducer } = employersSlice;
