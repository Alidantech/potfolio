import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg pt-5">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Alidante254
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/music" className="nav-link">
                <FontAwesomeIcon icon={faMusic} className="mr-2" />
                Music
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
