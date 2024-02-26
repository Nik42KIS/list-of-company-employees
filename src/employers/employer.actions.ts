import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all

const fetchEmployers = (url: string) => {
  const data = axios.get(url).then((res) => {
    return res.data.items;
  });

  return data;
};

export const getEmployersList = createAsyncThunk('getEmployers', async (url : string, thunkApi) => {
  try {
    const response = await fetchEmployers(url);
    return response;
  } catch (error) {
    thunkApi.rejectWithValue(error);
  }
});
