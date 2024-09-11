import { createSlice } from '@reduxjs/toolkit';
import { fetchTruckDetails, fetchTrucks } from './operations';
import { initialState } from './initialState';

// Utility function to handle rejected promises (when an error occurs)
const handleRejected = (state, action) => {
  state.isLoading = false;  // Set loading to false
  state.error = action.payload;  // Set error to the error message from action
};

// Utility function to handle pending promises (when a request is in progress)
const handlePending = (state) => {
  state.isLoading = true;  // Set loading to true
  state.error = null;  // Clear any previous error
};

// Create a slice for trucks, containing reducers and handling async actions
const truckSlice = createSlice({
  name: 'trucks',
  initialState: initialState,  // Initial state
  extraReducers: (builder) => {
    builder
      // Handle pending, fulfilled, and rejected cases for fetchTrucks
      .addCase(fetchTrucks.pending, handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;  // Set loading to false on success
        state.error = null;  // Clear any previous errors
        state.trucks = action.payload.items;  // Update trucks with payload data
      })
      .addCase(fetchTrucks.rejected, handleRejected)  // Handle error for fetchTrucks

      // Handle pending, fulfilled, and rejected cases for fetchTruckDetails
      .addCase(fetchTruckDetails.pending, handlePending)
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.isLoading = false;  // Set loading to false on success
        state.error = null;  // Clear any previous errors
        state.truck = action.payload;  // Update truck details with payload data
      })
      .addCase(fetchTruckDetails.rejected, handleRejected);  // Handle error for fetchTruckDetails
  },
});

// Export the reducer for the store configuration
export const truckReducer = truckSlice.reducer;