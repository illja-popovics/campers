import React from 'react';
import CamperCard from '../CamperCard/CamperCard';

const CamperList = ({ campers }) => {
  return (
    <div className="camper-list">
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </div>
  );
};

export default CamperList;