import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate('/catalog');
  };

  return (
    <div>
      <h1>Welcome to TravelTrucks</h1>
      <p>Discover your perfect camper for the road trip of your dreams!</p>
      <button onClick={handleViewNowClick}>View Now</button>
    </div>
  );
};

export default HomePage;