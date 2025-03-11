// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Music">Music</Link></li>
        <li><Link to="/Sports">Sports</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Discover">Discover</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/ShopePlanes">Shope Planes</Link></li>
        <li><Link to="/Stores">Stores</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;