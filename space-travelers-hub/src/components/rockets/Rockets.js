import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-item">
          <div className="image-container">
            <img src={rocket.flickr_images[0]} alt="Rocket" className="rocket-image" />
          </div>
          <div className="rocket-info">
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
