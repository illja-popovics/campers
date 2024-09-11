import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../utils/axios';

// Async thunk action to fetch all trucks (campers) data
export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll', // Action type
  async (_, thunkApi) => {
    try {
      // Sending a GET request to fetch all campers
      const response = await instance.get('/campers');
      console.log(response.data); // Log the response data (list of trucks)
      
      // Return the fetched data to be used in the reducer
      return response.data;
    } catch (error) {
      // If an error occurs, reject the action with the error message
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// Async thunk action to fetch details of a single truck by its ID
export const fetchTruckDetails = createAsyncThunk(
  'trucks/fetchById', // Action type
  async (id, thunkApi) => {
    try {
      // Sending a GET request to fetch details of a specific truck
      const response = await instance.get(`/campers/${id}`);
      console.log(response); // Log the response object
      
      // Return the fetched truck details to be used in the reducer
      return response.data;
    } catch (error) {
      // If an error occurs, reject the action with the error message
      return thunkApi.rejectWithValue(error.message);
    }
  }
);