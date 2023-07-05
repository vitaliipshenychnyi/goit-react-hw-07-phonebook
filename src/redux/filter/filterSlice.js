import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    change(state, action) {
      state = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;
