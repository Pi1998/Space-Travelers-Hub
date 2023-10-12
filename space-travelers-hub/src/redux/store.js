import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});
export default store;
