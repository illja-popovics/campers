import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCampers = createAsyncThunk('campers/fetchCampers', async () => {
  const response = await axios.get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers');
  return response.data.items;
});

export const fetchCamperById = createAsyncThunk('campers/fetchCamperById', async (id) => {
  const response = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
  return response.data;
});

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    campers: [],
    camper: null,
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.camper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default campersSlice.reducer;