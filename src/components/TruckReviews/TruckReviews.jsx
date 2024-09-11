import { useSelector } from 'react-redux'; // Importing Redux hook to access state
import ClientForm from '../ClientForm/ClientForm'; // Importing ClientForm component for submitting new reviews
import css from './TruckReviews.module.css'; // Importing CSS module for styling
import { selectTruck } from '../../redux/truck/selectors'; // Selector to get the current truck from Redux store
import icons from '../../assets/sprite.svg'; // Importing SVG icons
import { nanoid } from 'nanoid'; // Importing nanoid for generating unique keys

const TruckReviews = () => {
    const truck = useSelector(selectTruck); // Getting the current truck from Redux store
    const totalStars = 5; // Total number of stars for rating

    return (
        <div className={css.review}>
            <ul className={css.list}>
                {/* Render message if there are no reviews */}
                {truck.reviews.length === 0 ? (
                    <p>Sorry, there are no reviews!</p>
                ) : (
                    truck.reviews.map(item => (
                        <li className={css.list_item} key={nanoid()}> {/* Changed className to css.list_item */}
                            <div className={css.reviewer_wrapper}>
                                {/* Display the first letter of the reviewer's name */}
                                <div className={css.reviewer_name}>{item.reviewer_name.charAt(0)}</div>
                                <div>
                                    <h3>{item.reviewer_name}</h3>
                                    {/* Render stars based on review rating */}
                                    {[...Array(totalStars)].map((_, starIndex) => (
                                        <svg
                                            width="16"
                                            height="16"
                                            fill={starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"} // Gold for filled stars, gray for empty stars
                                            key={nanoid()}
                                        >
                                            <use href={`${icons}#icon-Rating-1`} />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className={css.comment}>{item.comment}</p>
                        </li>
                    ))
                )}
            </ul>
            <ClientForm /> {/* Render form for submitting new reviews */}
        </div>
    );
};

export default TruckReviews; // Exporting TruckReviews component as default