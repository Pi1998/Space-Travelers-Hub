import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../missions/missionsSlice';

const MyMissions = () => {
  const mission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mission.missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, mission.missions.length]);
  const { missions } = mission;
  const myMissions = missions.filter((mission) => mission.mission_join === true);
  return (
    <div className="missions-container">
      <h2 className="title">My Missoins</h2>
      <ul className="missions-list">
        {myMissions.map((mission) => (
          <li className="mission" key={mission.mission_id}>{mission.mission_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyMissions;
