import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue: {
      reducer(state, action) {
        console.log('🚀 ~ file: filterSlice.js:11 ~ reducer ~ state:', state);
        state.value = action.payload.value;
      },
    },
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
