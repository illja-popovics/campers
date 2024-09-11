import { useSelector } from 'react-redux'; // Importing useSelector hook for accessing Redux store state
import ClientForm from '../ClientForm/ClientForm'; // Importing ClientForm component for booking the truck
import Features from '../Features/Features'; // Importing Features component to display truck features
import css from './TruckFeatures.module.css'; // Importing CSS modules for styling
import { selectTruck } from '../../redux/truck/selectors'; // Importing selector to access truck data from Redux store

const TruckFeatures = () => {
    const truck = useSelector(selectTruck); // Selecting truck data from Redux store

    return (
        <div className={css.feature}> {/* Container for truck features and client form */}
            <div className={css.feature_wrapper}> {/* Wrapper for features and truck details */}
                <Features truck={truck}/> {/* Displaying truck features */}
                <h3 className={css.equipment_title}>Vehicle details</h3> {/* Title for vehicle details section */}
                
                <div className={css.truck_info}> {/* Container for displaying truck details */}
                    <div className={css.truck_category}><p>Form </p><p>{truck.form}</p></div> {/* Displaying truck form */}
                    <div className={css.truck_category}><p>Length</p><p>{truck.length}</p></div> {/* Displaying truck length */}
                    <div className={css.truck_category}><p>Width</p><p>{truck.width}</p></div> {/* Displaying truck width */}
                    <div className={css.truck_category}><p>Height</p><p>{truck.height}</p></div> {/* Displaying truck height */}
                    <div className={css.truck_category}><p>Tank</p><p>{truck.tank}</p></div> {/* Displaying truck tank capacity */}
                    <div className={css.truck_category}><p>Consumption</p><p> {truck.consumption}</p></div> {/* Displaying truck consumption */}
                </div>
            </div>

            <ClientForm/> {/* Rendering ClientForm component for booking */}
        </div>
    )
}

export default TruckFeatures; // Exporting TruckFeatures component as default