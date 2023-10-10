import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';  

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
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