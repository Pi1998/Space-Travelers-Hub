import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../../icon/planet.png';
import './navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="site-name">
          <h2>Space Travelers&apos; Hub</h2>
        </div>
      </div>
      <div className="navbar-right">
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
            <div className="vertical-line" />
          </li>
          <li>
            <NavLink to="/myprofile" activeClassName="active">
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
