import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const filteredData = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.name,
      description: rocket.description,
      flickr_images: rocket.flickr_images,
    }));

    return filteredData;
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
