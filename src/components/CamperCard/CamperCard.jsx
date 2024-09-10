import React from 'react';
import { Link } from 'react-router-dom';

const CamperCard = ({ camper }) => {
  return (
    <div className="camper-card">
      <img src={camper.gallery[0].thumb} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>{camper.location}</p>
      <p>Price: {camper.price.toLocaleString('en-US')},00</p>
      <p>Rating: {camper.rating}</p>
      <Link to={`/catalog/${camper.id}`}>Show more</Link>
    </div>
  );
};

export default CamperCard;