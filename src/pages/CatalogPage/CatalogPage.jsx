import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';
import Filters from '../../components/Filters/Filters';
import CamperList from '../../components/CamperList/CamperList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { campers, status } = useSelector((state) => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className="catalog-page">
      <Filters />
      {status === 'loading' ? <p>Loading...</p> : <CamperList campers={campers} />}
    </div>
  );
};

export default CatalogPage;