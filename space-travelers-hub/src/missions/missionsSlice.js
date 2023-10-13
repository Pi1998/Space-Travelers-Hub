import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching rockets data');
  }
});

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      state.missions = state.missions.map((mission) => (
        {
          ...mission,
          mission_join: (mission.mission_id === id) ? false : mission.mission_join,
        }
      ));
    },
    cancelMission: (state, action) => {
      state.missions = state.missions.map((mission) => (
        {
          ...mission,
          mission_join: action.payload === mission.mission_id ? true : mission.mission_join,
        }
      ));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        mission_join: false,
      }));
      state.error = '';
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export const { joinMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
