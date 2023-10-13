import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelMission, fetchMissions, joinMission } from '../../missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const mission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div>
      {mission.loading && <div>Loading...</div>}
      {!mission.loading && <div>{mission.error}</div>}
      {!mission.loading && mission.missions.length ? (
        <table className="mission-table">
          <thead className="table-head">
            <th width="10%">Mission</th>
            <th width="62%">Desciption</th>
            <th width="13%">Status</th>
          </thead>
          <tbody className="table-body">
            {mission.missions.map((mission) => (
              <tr className="table-row" key={mission.mission_id}>
                <th>{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td className="status">{mission.mission_join ? <p className="active-member">Active Member</p> : <p className="not-memeber">NOT A MEMEBER</p> }</td>
                <td className="btns-col">
                  {mission.mission_join
                    ? <button className="leave-btn" type="button" onClick={() => dispatch(joinMission(mission.mission_id))}>Leave Mission</button>
                    : <button className="join-btn" type="button" onClick={() => dispatch(cancelMission(mission.mission_id))}>Join Mission</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Missions;
