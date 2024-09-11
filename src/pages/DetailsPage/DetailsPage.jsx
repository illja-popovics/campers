import { Helmet } from "react-helmet-async"; // Used to manage the document head (title, meta tags)
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import { useParams } from "react-router-dom"; // Hook to access URL parameters
import { useEffect } from "react"; // Hook to perform side effects (e.g., fetching data)
import { fetchTruckDetails } from "../../redux/truck/operations"; // Action to fetch truck details by ID
import css from "./DetailsPage.module.css"; // Import CSS module for styling
import DetailedInfo from "../../components/DetailedInfo/DetailedInfo"; // Component to display detailed truck info
import { Toaster } from "react-hot-toast"; // Used for toast notifications

const DetailsPage = () => {
  const dispatch = useDispatch(); // Use dispatch to trigger actions
  const { id } = useParams(); // Get truck ID from URL parameters

  // Fetch truck details when the component mounts or when the ID changes
  useEffect(() => {
    dispatch(fetchTruckDetails(id)); // Dispatch action to fetch truck details
  }, [dispatch, id]); // Effect depends on dispatch and id

  return (
    <>
      {/* Helmet for setting the page title */}
      <Helmet>
        <title>Details Page</title>
      </Helmet>

      {/* Toaster for displaying notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Main section for displaying truck details */}
      <section className={css.detailed_container}>
        {/* Component for showing detailed information about the truck */}
        <DetailedInfo />
      </section>
    </>
  );
};

export default DetailsPage;