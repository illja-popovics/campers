import { useSelector } from "react-redux"; // Hook to access the Redux store state
import { selectFavourites } from "../../redux/favourites/selectors"; // Selector to get favourite truck IDs
import { selectTrucks } from "../../redux/truck/selectors"; // Selector to get all trucks from the store
import TruckList from "../../components/TruckList/TruckList"; // Component to display the list of trucks
import css from "./FavouritePage.module.css"; // Import CSS module for styling

const FavouritePage = () => {
  // Get the list of favourite truck IDs from the Redux store
  const favourites = useSelector(selectFavourites);

  // Get the list of all trucks from the Redux store
  const allTrucks = useSelector(selectTrucks);

  // Filter the trucks to show only those that are in the favourites list
  const favouriteTrucks = allTrucks.filter(truck => favourites.includes(truck.id));

  return (
    <div className={css.favourite_wrapper}>
      {/* Title for the Favourites page */}
      <h2 className={css.favourite_title}>Your Favourites</h2>

      {/* List of favourite trucks */}
      <div className={css.favourite_list}>
        <TruckList filteredTrucks={favouriteTrucks} />
      </div>
    </div>
  );
};

export default FavouritePage;