import React from 'react';

const CamperDetails = ({ camper }) => {
  const {
    name,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    length,
    width,
    height,
    tank,
    consumption,
    price,
  } = camper;

  return (
    <div className={styles.camperDetails}>
      <h2>{name}</h2>
      <p>{description}</p>

      <div className={styles.detailsSection}>
        <h3>Specifications</h3>
        <ul>
          <li><strong>Transmission:</strong> {transmission}</li>
          <li><strong>Engine:</strong> {engine}</li>
          <li><strong>Length:</strong> {length}</li>
          <li><strong>Width:</strong> {width}</li>
          <li><strong>Height:</strong> {height}</li>
          <li><strong>Fuel Tank Capacity:</strong> {tank}</li>
          <li><strong>Fuel Consumption:</strong> {consumption}</li>
          <li><strong>AC:</strong> {AC ? 'Yes' : 'No'}</li>
          <li><strong>Bathroom:</strong> {bathroom ? 'Yes' : 'No'}</li>
          <li><strong>Kitchen:</strong> {kitchen ? 'Yes' : 'No'}</li>
          <li><strong>TV:</strong> {TV ? 'Yes' : 'No'}</li>
          <li><strong>Radio:</strong> {radio ? 'Yes' : 'No'}</li>
          <li><strong>Refrigerator:</strong> {refrigerator ? 'Yes' : 'No'}</li>
          <li><strong>Microwave:</strong> {microwave ? 'Yes' : 'No'}</li>
          <li><strong>Gas:</strong> {gas ? 'Yes' : 'No'}</li>
          <li><strong>Water:</strong> {water ? 'Yes' : 'No'}</li>
        </ul>
      </div>

      <div className={styles.priceSection}>
        <h3>Price</h3>
        <p>{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      </div>

      {/* Booking Form */}
      <div className={styles.bookingForm}>
        <h3>Book this Camper</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Start Date:
            <input type="date" name="startDate" required />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" required />
          </label>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default CamperDetails;