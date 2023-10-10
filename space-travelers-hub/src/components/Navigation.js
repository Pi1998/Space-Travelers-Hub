import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/rockets" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeClassName="active">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="/myprofile" activeClassName="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;