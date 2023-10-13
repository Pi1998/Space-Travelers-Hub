import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import missionsReducer from '../missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});
=======
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

>>>>>>> 098d084507bd426f6df3ec71c9f14c6ebc81642e
export default store;
