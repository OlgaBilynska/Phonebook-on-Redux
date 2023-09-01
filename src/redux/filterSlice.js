import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: (state, action) => action.payload,
  },
});

// const persistConfig = {
//   key: 'filter',
//   storage,
// };

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const persistedFilterReducer = persistReducer(
//   persistConfig,
//   filterReducer
// );
