<<<<<<< Updated upstream
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import encg from '../assets/encg.jpeg'; // ✅ adjust the path if needed
=======
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/navbar.css";
>>>>>>> Stashed changes

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursOpen, setIsCoursOpen] = useState(false);
  const [isTdOpen, setIsTdOpen] = useState(false);
  const location = useLocation();

<<<<<<< Updated upstream
  function handleToggle() {
    setIsOpen(prev => !prev);
  }

  function handleNavigate() {
=======
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleNavigate = () => {
>>>>>>> Stashed changes
    setIsOpen(false);
    setIsCoursOpen(false);
    setIsTdOpen(false);
  }

  React.useEffect(() => {
    setIsOpen(false);
    setIsCoursOpen(false);
    setIsTdOpen(false);
  }, [location.pathname]);

  return (
    <>
<<<<<<< Updated upstream
      {/* ✅ Banner Section */}
      <div className="banner-container">
        <img src={encg} alt="ENCG Banner" className="banner-image" />
      </div>

      {/* Existing Navbar */}
=======
      {/* ✅ Single Navbar */}
>>>>>>> Stashed changes
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h2>ENCG Barakat</h2>
          </div>

          <button
            className={`navbar-toggle${isOpen ? " is-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={handleToggle}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <ul
            id="primary-navigation"
            className={`navbar-menu${isOpen ? " is-open" : ""}`}
          >
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={handleNavigate}>
                Accueil
              </Link>
            </li>
<<<<<<< Updated upstream
            <li className={`navbar-item dropdown${isCoursOpen ? ' is-open' : ''}`}>
=======

            <li
              className={`navbar-item dropdown${isCoursOpen ? " is-open" : ""}`}
            >
>>>>>>> Stashed changes
              <button
                type="button"
                className="navbar-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isCoursOpen}
                onClick={() => setIsCoursOpen((prev) => !prev)}
              >
                Cours
                <span className="caret" aria-hidden="true">▾</span>
              </button>
              <ul className="dropdown-menu" role="menu">
<<<<<<< Updated upstream
                <li><Link to="/cours/3eme" className="navbar-link" onClick={handleNavigate}>3éme année ENCG</Link></li>
                <li><Link to="/cours/4eme" className="navbar-link" onClick={handleNavigate}>4éme année ENCG</Link></li>
                <li><Link to="/cours/5eme" className="navbar-link" onClick={handleNavigate}>5éme année ENCG</Link></li>
=======
                <li>
                  <Link to="/cours/3eme" className="navbar-link" onClick={handleNavigate}>
                    3éme année ENCG
                  </Link>
                </li>
                <li>
                  <Link to="/cours/4eme" className="navbar-link" onClick={handleNavigate}>
                    4éme année ENCG
                  </Link>
                </li>
                <li>
                  <Link to="/cours/5eme" className="navbar-link" onClick={handleNavigate}>
                    5éme année ENCG
                  </Link>
                </li>
>>>>>>> Stashed changes
              </ul>
            </li>

            <li className={`navbar-item dropdown${isTdOpen ? " is-open" : ""}`}>
              <button
                type="button"
                className="navbar-link dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isTdOpen}
                onClick={() => setIsTdOpen((prev) => !prev)}
              >
                TD
                <span className="caret" aria-hidden="true">▾</span>
              </button>
              <ul className="dropdown-menu" role="menu">
<<<<<<< Updated upstream
                <li><Link to="/td/3eme" className="navbar-link" onClick={handleNavigate}>3éme année ENCG</Link></li>
                <li><Link to="/td/4eme" className="navbar-link" onClick={handleNavigate}>4éme année ENCG</Link></li>
                <li><Link to="/td/5eme" className="navbar-link" onClick={handleNavigate}>5éme année ENCG</Link></li>
=======
                <li>
                  <Link to="/td/3eme" className="navbar-link" onClick={handleNavigate}>
                    3éme année ENCG
                  </Link>
                </li>
                <li>
                  <Link to="/td/4eme" className="navbar-link" onClick={handleNavigate}>
                    4éme année ENCG
                  </Link>
                </li>
                <li>
                  <Link to="/td/5eme" className="navbar-link" onClick={handleNavigate}>
                    5éme année ENCG
                  </Link>
                </li>
>>>>>>> Stashed changes
              </ul>
            </li>
            <li className="navbar-item">
              <Link
                to="/a-propos"
                className="navbar-link"
                onClick={handleNavigate}
              >
                À propos
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="navbar-link"
                onClick={handleNavigate}
              >
                Contact
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/login"
                className="navbar-link"
                onClick={handleNavigate}
              >
                login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;