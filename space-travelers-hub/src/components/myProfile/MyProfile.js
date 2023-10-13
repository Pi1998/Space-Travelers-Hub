import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.mission.missions);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const joinedMissions = missions.filter((mission) => mission.mission_join);

  return (
    <div className="profile-container">
      <div className="column">
        <h2>Reserved Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h2>Joined Missions</h2>
        <ul>
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
