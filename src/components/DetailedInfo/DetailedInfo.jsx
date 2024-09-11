import { useSelector } from 'react-redux'; // To select state from Redux store
import css from './DetailedInfo.module.css'; // Import CSS module for styling
import { selectTruck } from '../../redux/truck/selectors'; // Selector to get the specific truck data from the store
import icons from '../../assets/sprite.svg'; // Import SVG sprite for icons
import clsx from "clsx"; // Utility to conditionally join class names
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'; // For navigation and routing within the app
import TruckFeatures from '../TruckFeatures/TruckFeatures'; // Component for truck features
import TruckReviews from '../TruckReviews/TruckReviews'; // Component for truck reviews

// Function to dynamically apply active class to navigation links
const activeLink = ({ isActive }) => {
  return clsx(css.details_link, isActive && css.active); // Applies 'active' class if the link is active
};

const DetailedInfo = () => {
    const truck = useSelector(selectTruck); // Select the truck details from the Redux store

    return (
    <>
        {/* Truck name */}
        <h2 className={css.name_title}>{truck.name}</h2>

        {/* Rating and location section */}
        <div className={css.rating_wrapper}>
            {/* Rating icon */}
            <svg className={css.icon} width="16" height="16">
                <use href={`${icons}#icon-Rating`} />
            </svg>
            {/* Display rating and number of reviews */}
            <p className={css.reviews}>
              {truck.rating} ({truck.reviews ? truck.reviews.length : 0} Reviews)
            </p>
            {/* Location icon */}
            <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
            </svg>
            {truck.location}
        </div>

        {/* Display truck price */}
        <p className={css.name_title}>{`€ ${Number(truck.price).toFixed(2)}`}</p>

        {/* Truck gallery */}
        {truck.gallery.length > 0 ? (
            <ul className={css.gallery}>
                {/* Loop through the truck gallery to display images */}
                {truck.gallery.map((item, index) => (
                    <li key={index}>
                        <img className={css.photo} src={item.thumb} alt={`Gallery image ${index + 1}`} />
                    </li>
                ))}
            </ul>
        ) : (
            <p>No images available.</p> // If no images are available in the gallery
        )}

        {/* Truck description */}
        <p className={css.item_description}>{truck.description}</p>

        {/* Navigation links for features and reviews */}
        <ul className={css.details_list}>
            <li className={css.details_item}>
                <NavLink className={activeLink} to="features">Features</NavLink>
            </li>
            <li className={css.details_item}>
                <NavLink className={activeLink} to="reviews">Reviews</NavLink>
            </li>
        </ul>

        {/* Routes for truck features and reviews */}
        <Routes>
            {/* Default route to redirect to "features" */}
            <Route path="" element={<Navigate to="features" />} />
            {/* Route to display truck features */}
            <Route path="features" element={<TruckFeatures/>}></Route>
            {/* Route to display truck reviews */}
            <Route path="reviews" element={<TruckReviews/>}></Route>
        </Routes>
    </>
  );
}

export default DetailedInfo;