// Selector to retrieve the list of trucks from the Redux state
export const selectTrucks = (state) => state.trucks.trucks;

// Selector to retrieve the details of a single truck from the Redux state
export const selectTruck = (state) => state.trucks.truck;

// Selector to check if data is currently being loaded (loading state)
export const isLoading = (state) => state.trucks.isLoading;