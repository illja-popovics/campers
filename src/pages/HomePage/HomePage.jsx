import { Helmet } from 'react-helmet-async'; // Allows dynamic changes to the document head (e.g., setting the page title)
import MainInfo from '../../components/MainInfo/MainInfo'; // Component that contains the main information for the Home Page

const HomePage = () => {
  return (
    <>
      {/* Helmet allows setting the title of the page dynamically */}
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      
      {/* MainInfo component displays the primary content for the Home Page */}
      <MainInfo />
    </>
  );
};

export default HomePage;