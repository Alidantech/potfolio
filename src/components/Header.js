import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCode, faMusic } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container text-white">
        <Link to="/" className="navbar-brand text-success">
          <FontAwesomeIcon icon={faUser} className="m-2 mt-0 mb-0 text-primary logo" />
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
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-3">
              <Link to="/" className="nav-link text-primary">
                <FontAwesomeIcon icon={faHome} className="m-2 mt-0 mb-0" />
                Home
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/projects" className="nav-link text-primary">
                <FontAwesomeIcon icon={faCode} className="m-2 mt-0 mb-0" />
                Projects
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/music" className="nav-link text-primary">
                <FontAwesomeIcon icon={faMusic} className="m-2 mt-0 mb-0" />
                Music
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link to="/about" className="nav-link text-primary">
                <FontAwesomeIcon icon={faUser} className="m-2 mt-0 mb-0" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
