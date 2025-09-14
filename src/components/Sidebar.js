import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/calendar" className="nav-link">
              Calendar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/inbox" className="nav-link">
              Inbox
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/analytics" className="nav-link">
              Analytics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;