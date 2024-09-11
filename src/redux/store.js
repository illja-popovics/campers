// Importing necessary functions from Redux Toolkit and redux-persist
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,      // Creates a persistor for managing persisted store state
  persistReducer,    // Wraps a reducer to enable persistence
  FLUSH,             // Action type for flushing persisted state
  REHYDRATE,         // Action type for rehydrating state after persistence
  PAUSE,             // Action type for pausing persistence
  PERSIST,           // Action type for starting persistence
  PURGE,             // Action type for purging persisted state
  REGISTER           // Action type for registering the store with persistence
} from "redux-persist";
import storage from "redux-persist/lib/storage";  // Default storage mechanism (localStorage)
import { truckReducer } from './truck/slice';     // Reducer for managing truck data
import { filtersReducer } from './filters/slice'; // Reducer for managing filters
import { favouritesReducer } from './favourites/slice'; // Reducer for managing favourites

// Configuration for persisting the favourites slice of the store
const favouritesPersistConfig = {
  key: "favourites", // Key under which favourites will be stored in localStorage
  storage,           // Specify the storage mechanism
};

// Configuration for persisting the filters slice of the store
const filtersPersistConfig = {
  key: "filters",    // Key under which filters will be stored in localStorage
  storage,           // Specify the storage mechanism
};

// Configure the Redux store with reducers and middleware
export const store = configureStore({
  reducer: {
    trucks: truckReducer,  // Truck data is not persisted
    filters: persistReducer(filtersPersistConfig, filtersReducer), // Filters are persisted
    favourites: persistReducer(favouritesPersistConfig, favouritesReducer), // Favourites are persisted
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific actions from redux-persist to avoid errors with non-serializable data
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor, which is responsible for persisting the store
export const persistor = persistStore(store);