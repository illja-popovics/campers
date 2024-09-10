import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div>
        <label>Location:</label>
        <input type="text" placeholder="Enter location" />
      </div>
      <div>
        <label>Vehicle Type:</label>
        <select>
          <option value="van">Van</option>
          <option value="fully-integrated">Fully Integrated</option>
          <option value="alcove">Alcove</option>
        </select>
      </div>
      <div>
        <label>Vehicle Equipment:</label>
        <div>
          <label><input type="checkbox" /> AC</label>
          <label><input type="checkbox" /> Kitchen</label>
          <label><input type="checkbox" /> Bathroom</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;