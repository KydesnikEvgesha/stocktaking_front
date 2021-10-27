import { createSlice } from '@reduxjs/toolkit';
import { initialState, nameReducer } from './constants';
import reducers from './reducer';

const locationSlice = createSlice({
  initialState,
  name: nameReducer,
  reducers,
});

export default locationSlice;