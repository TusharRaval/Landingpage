import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/delle.webp';


const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg glass-navbar">
      <div className="container">
      <Link className="navbar-brand" to="/">
          <img src={logo} alt="MyBrand Logo" style={{ width: '50px', height: '50px' }} />
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
