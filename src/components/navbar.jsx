import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>ENCG Barakat</h2>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Accueil</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">TD</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">À propos</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
