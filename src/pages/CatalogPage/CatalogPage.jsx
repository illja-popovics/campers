import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Used to manage the document head for SEO
import { useDispatch, useSelector } from "react-redux"; // Hooks for dispatching actions and selecting state
import { fetchTrucks } from "../../redux/truck/operations"; // Action to fetch trucks
import TruckList from "../../components/TruckList/TruckList"; // Component to display the list of trucks
import Filters from "../../components/Filters/Filters"; // Component for filtering options
import css from "./CatalogPage.module.css"; // Import CSS module for styling
import { selectFilteredTrucks } from "../../redux/filters/selectors"; // Selector for filtered trucks
import { isLoading } from "../../redux/truck/selectors"; // Selector for loading state

const CatalogPage = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const filteredTrucks = useSelector(selectFilteredTrucks); // Get filtered trucks from the Redux store
  const loading = useSelector(isLoading); // Get the loading state from the Redux store
  const [visibleCount, setVisibleCount] = useState(4); // State to manage the number of visible trucks

  // Dispatch fetchTrucks action when the component mounts
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  // Reset the number of visible trucks whenever the filteredTrucks array changes
  useEffect(() => {
    setVisibleCount(4);
  }, [filteredTrucks]);

  // Increase the number of visible trucks by 4 when the "Load more" button is clicked
  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      {/* Helmet for setting the page title */}
      <Helmet>
        <title>Catalog Page</title>
      </Helmet>

      {/* Main catalog section */}
      <section className={css.catalog_container}>
        {/* Filters component to filter trucks */}
        <Filters />
        
        {/* Display the list of trucks, limiting the visible trucks to the value of visibleCount */}
        <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
      </section>

      {/* Show "Load more" button if not loading and there are more trucks to display */}
      {!loading && visibleCount < filteredTrucks.length && (
        <button className={css.search_button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;