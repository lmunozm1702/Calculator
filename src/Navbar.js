import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navContainer">
    <div className="navLogo">Math Magicians</div>
    <nav className="menuOptions">
      <ul className="navList">
        <li><NavLink to="/" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Home</NavLink></li>
        <li><NavLink to="/calculator" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Calculator</NavLink></li>
        <li><NavLink to="/quote" className={(navData) => (navData.isActive ? 'activeLink' : 'none')}>Quote</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
