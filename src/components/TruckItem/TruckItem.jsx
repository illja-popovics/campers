import { Link } from "react-router-dom"; // Importing Link component for navigation
import css from "./TruckItem.module.css"; // Importing CSS modules for styling
import icons from '../../assets/sprite.svg'; // Importing SVG icons
import Features from "../Features/Features"; // Importing Features component to display truck features
import { useDispatch, useSelector } from "react-redux"; // Importing Redux hooks for dispatch and selector
import { selectFavourites } from "../../redux/favourites/selectors"; // Selector to access favourite trucks
import { toggleFavourite } from "../../redux/favourites/slice"; // Action to toggle favourite status

const TruckItem = ({ truck }) => {
  const dispatch = useDispatch(); // Initializing dispatch function
  const favourites = useSelector(selectFavourites); // Getting list of favourite trucks from Redux store
  const isFavourite = Array.isArray(favourites) && favourites.includes(truck.id); // Checking if the truck is in the favourites list

  // Handler function to toggle the truck's favourite status
  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(truck.id)); // Dispatching action to toggle favourite status
  };

  return (
    <div className={css.item_wrapper}> {/* Container for the truck item */}
      {/* Conditionally render truck image if available */}
      {truck.gallery?.[0]?.thumb && (
        <img
          className={css.photo}
          src={`${truck.gallery[0].thumb}`}
          width="292"
          alt={`${truck.name}`}
        />
      )}
      <div className={css.info_wrapper}> {/* Container for truck information */}
        <div className={css.name_wrapper}> {/* Wrapper for name and price */}
          <h2 className={css.name_title}>{truck.name}</h2> {/* Displaying truck name */}
          <div className={css.favourite_wrapper}> {/* Wrapper for price and favourite icon */}
            <p>{`€ ${Number(truck.price).toFixed(2)}`}</p> {/* Displaying truck price */}
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite} // Toggle favourite status on click
              fill={isFavourite ? "#e44848" : "#101828"} // Change icon color based on favourite status
              cursor='pointer'>
              <use href={`${icons}#heard`} /> {/* Displaying favourite icon */}
            </svg>
          </div>
        </div>
        <div className={css.rating_wrapper}> {/* Wrapper for rating and location */}
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} /> {/* Displaying rating icon */}
          </svg>
          <p className={css.reviews}>{truck.rating} ({truck.reviews.length} Reviews)</p> {/* Displaying rating and review count */}
          <svg width="20" height="20">
            <use href={`${icons}#Map`} /> {/* Displaying location icon */}
          </svg> {truck.location} {/* Displaying truck location */}
        </div>
        <p className={css.item_description}>{`${truck.description.substring(0, 60)}` + "..."}</p> {/* Displaying truncated description */}
        <Features truck={truck} /> {/* Displaying truck features */}
        {/* Link to detailed truck view with a button */}
        <Link to={`/catalog/${truck.id}`} target="_blank" rel="noopener noreferrer">
          <button type='button' className={css.item_button}>Show more</button>
        </Link>
      </div>
    </div>
  )
}

export default TruckItem; // Exporting TruckItem component as default