import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../../redux/campersSlice';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import Reviews from '../../components/Reviews/Reviews';

const CamperPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camper, status } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div className="camper-page">
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          <CamperDetails camper={camper} />
          <Reviews reviews={camper.reviews} />
        </>
      )}
    </div>
  );
};

export default CamperPage;