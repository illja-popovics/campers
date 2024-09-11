// Initial state structure for the Redux store
export const initialState = {
  // Array to store the list of trucks
  trucks: [],
  
  // Object to store the details of a single truck
  truck: {
    name: '',           // Name of the truck
    rating: 0,          // Truck rating (e.g., out of 5)
    reviews: [],        // Array to store reviews of the truck
    location: '',       // Location of the truck
    price: 0,           // Price of the truck
    gallery: [],        // Array to store image gallery of the truck
    description: '',    // Description of the truck
  },

  // Loading state to indicate whether data is being fetched
  isLoading: false,     

  // Error state to capture any error that occurs during API requests
  error: null,

  // Filters object to store the state of filters for searching trucks
  filters: {
    features: [],       // Array to store selected features
    form: "",           // Truck form (e.g., type of truck)
    location: "",       // Location filter for trucks
  },

  // Array to store a list of favorite trucks
  favourites: [],
};