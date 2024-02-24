import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employers: [],
};

export const employersSlice = createSlice({
  name: 'employers',
  initialState,
  reducers: {
    getEmployers: (state, action) => {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = employersSlice;
