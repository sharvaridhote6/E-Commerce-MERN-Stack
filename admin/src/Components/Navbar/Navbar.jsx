
import React from 'react';
import './Navbar.css';
import favicon_copy from '../Assets/favicon_copy.ico';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>E-COMMERCE STORE</h1>
      <img src={favicon_copy} className='nav-logo' alt="Logo" />
    </div>
  );
};

export default Navbar;
