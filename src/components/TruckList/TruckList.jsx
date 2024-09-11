import css from "./TruckList.module.css"; // Importing CSS modules for styling
import TruckItem from "../TruckItem/TruckItem"; // Importing TruckItem component to display individual trucks
import { useSelector } from "react-redux"; // Importing Redux hook to access state
import { isLoading } from "../../redux/truck/selectors"; // Selector to check if trucks are loading
import Loader from "../Loader/Loader"; // Importing Loader component for loading state

const TruckList = ({ filteredTrucks }) => {
  const loading = useSelector(isLoading); // Getting loading state from Redux store
  
  // Render loader if data is still loading
  if (loading) {
    return <Loader />;
  }

  // Render message if no trucks are available
  if (filteredTrucks.length === 0) {
    return <p className={css.text}>Sorry, there are no campers!</p>;
  }

  // Render list of filtered trucks
  return (
    <ul className={css.list}>
      {filteredTrucks.map(item => (
        <li className={css.list_item} key={item.id}> {/* Changed className to css.list_item */}
          <TruckItem truck={item} /> {/* Displaying individual truck item */}
        </li>
      ))}
    </ul>
  )
}

export default TruckList; // Exporting TruckList component as default