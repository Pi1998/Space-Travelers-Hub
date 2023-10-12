import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching rockets data');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const { id } = action.payload;
      if (Array.isArray(state.rockets)) {
        return {
          ...state,
          rockets: state.rockets.map((rocket) => (
            rocket.id !== id ? rocket : { ...rocket, reserved: true }
          )),
        };
      }
      return state;
    },

    cancelRocketReservation(state, action) {
      const { id } = action.payload;
      if (Array.isArray(state.rockets)) {
        return {
          ...state,
          rockets: state.rockets.map((rocket) => (
            rocket.id !== id ? rocket : { ...rocket, reserved: false }
          )),
        };
      }
      return state;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket, cancelRocketReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
