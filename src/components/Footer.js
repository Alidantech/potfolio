import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact</h5>
            <p>Email: peteralidante254@gmail.com</p>
            <p>Phone: +254-748-311-679</p>
            <p>Twitter: Alidante_254</p>
          </div>
          <div className="col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About me</a>
              </li>
              <li>
                <a href="/projects">Projects I have created</a>
              </li>
              <li>
                <a href="/music">My own Music</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
