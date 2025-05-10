import "./Header.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">CampusConnect</Link>
        <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <Link to="/discover" className="navbar-link">Discover</Link>
          <Link to="/messages" className="navbar-link">Messages</Link>
          <Link to="/network" className="navbar-link">Network</Link>
          <Link to="/home" className="navbar-link">Home</Link>
          <Link to="/login" className="navbar-signin">Sign in</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
