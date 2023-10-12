import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../missions/missionsSlice';
import './Missions.css';

const Missions = () => {
  const mission = useSelector((state) => state.mission);
  console.log(mission.missions);
  console.log(mission.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div>
      {mission.loading && <div>Loading...</div>}
      {!mission.loading && (
      <div>
        Error:
        {mission.error}
      </div>
      )}
      {!mission.loading && mission.missions.length ? (
        <table className="mission-table">
          <thead className="table-head">
            <th width="10%">Mission</th>
            <th width="62%">Desciption</th>
            <th width="12%">Status</th>
          </thead>
          <tbody className="table-body">
            {mission.missions.map((mission) => (
              <tr className="table-row" key={mission.mission_id}>
                <th>{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td className="status">{mission.mission_join ? <p>Active Member</p> : <p className="not-memeber">NOT A MEMEBER</p>}</td>
                <td className="btns-col">
                  {mission.mission_join
                    ? <button className="action-btn" type="button">Leave Mission</button>
                    : <button className="action-btn" type="button">Join Mission</button>}
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
