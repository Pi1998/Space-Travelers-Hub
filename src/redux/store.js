import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
