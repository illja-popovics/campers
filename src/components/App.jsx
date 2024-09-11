import './App.css'; // Importing global CSS styles
import { lazy, Suspense } from 'react'; // Importing lazy and Suspense for code splitting
import { Route, Routes } from 'react-router-dom'; // Importing Route and Routes for routing
import Layout from './Layout/Layout'; // Importing Layout component for page layout
import Loader from './Loader/Loader'; // Importing Loader component to show while pages are loading

// Lazy loading page components to optimize performance
const HomePage = lazy(() => import('../pages/HomePage/HomePage')); // Lazy load HomePage component
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage')); // Lazy load CatalogPage component
const DetailsPage = lazy(() => import('../pages/DetailsPage/DetailsPage')); // Lazy load DetailsPage component
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage')); // Lazy load NotFoundPage component
const FavouritePage = lazy(() => import('../pages/FavouritePage/FavouritePage')); // Lazy load FavouritePage component

function App() { 
  return (
    <>
      {/* Suspense component handles the fallback while lazy-loaded components are being loaded */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Main layout route */}
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} /> {/* Default route */}
            <Route path='/catalog' element={<CatalogPage />} /> {/* Catalog page route */}
            <Route path='/catalog/:id/*' element={<DetailsPage />} /> {/* Details page with dynamic ID */}
            <Route path='/favourites' element={<FavouritePage />} /> {/* Favourites page route */}
            <Route path='*' element={<NotFoundPage />} /> {/* Route for handling 404 errors */}
          </Route>     
        </Routes>
      </Suspense> 
    </>
  );
}

export default App; // Exporting App component as default