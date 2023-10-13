import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from './MyMissions';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <MyMissions />
      <div className="rocket-container">
        <h2 className="title">My Rockets</h2>
        <ul className="rockets-list">
          {reservedRockets.map((rocket) => (
            <li className="rocket" key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
