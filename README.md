#TravelTrucks

TravelTrucks is a web application designed to help users find and book campers.
It features a catalog of camper vehicles, detailed views of each camper, and a
favorite management system. Users can search for campers based on various
filters and view detailed information about each camper, including reviews and
vehicle details.

##Features

    •	Home Page: Displays an overview and introduction to the TravelTrucks service.
    •	Catalog Page: Lists available campers with filtering and sorting options.
    •	Details Page: Shows detailed information about a specific camper, including reviews and features.
    •	Favourites Page: Allows users to view and manage their favorite campers.
    •	Responsive Design: Fully responsive design to ensure a smooth user experience across different devices.

##Technologies Used

    •	React: JavaScript library for building user interfaces.
    •	Redux: State management library for managing application state.
    •	React Router: Library for routing and navigation.
    •	Axios: HTTP client for making API requests.
    •	CSS Modules: For styling components.
    •	Formik: Library for managing forms and validation.
    •	Yup: Schema validation library for form validation.
    •	React Loader Spinner: For displaying loading indicators.

##Installation

To get started with TravelTrucks, follow these steps:

    1.	Clone the repository:

    ```git clone https://github.com/yourusername/traveltrucks.git

cd traveltrucks````

    2.	Install dependencies:

```npm install````

    3.	Start the development server:

```npm start````

This will start the application on http://localhost:3000.

Project Structure

    •	src/: Contains the source code for the application.
    •	components/: Contains reusable React components.
    •	pages/: Contains page components for different routes.
    •	redux/: Contains Redux slice files and selectors.
    •	assets/: Contains static assets like images and SVGs.
    •	App.js: Main application component with routing setup.
    •	index.js: Entry point for the React application.

Components

    •	Layout: Provides the main layout structure with header and navigation.
    •	Logo: Displays the application logo.
    •	MainInfo: Shows introductory information on the home page.
    •	Navigation: Provides navigation links to different pages.
    •	TruckItem: Represents a single camper item in the catalog.
    •	TruckList: Displays a list of campers.
    •	TruckFeatures: Shows detailed features of a selected camper.
    •	TruckReviews: Displays reviews for a selected camper.
    •	Loader: Shows a loading spinner while data is being fetched.

Usage

    •	Home Page: Accessible at / and displays an overview and introductory content.
    •	Catalog Page: Accessible at /catalog and shows a list of available campers with filtering options.
    •	Details Page: Accessible at /catalog/:id and shows detailed information and reviews for a specific camper.
    •	Favourites Page: Accessible at /favourites and allows users to manage their favorite campers.

Contributing

Contributions are welcome! Please follow these guidelines:

    1.	Fork the repository.
    2.	Create a new branch (git checkout -b feature/YourFeature).
    3.	Commit your changes (git commit -am 'Add new feature').
    4.	Push to the branch (git push origin feature/YourFeature).
    5.	Create a new Pull Request.

License

This project is licensed under the MIT License - see the LICENSE file for
details.

Acknowledgments

    •	React: For building the user interface.
    •	Redux: For state management.
    •	React Router: For routing and navigation.
    •	Formik and Yup: For form handling and validation.
    •	React Loader Spinner: For loading animations.
