import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Alidante254';
  }, []);

  return (
    <div className="container">
      <section>
        <h2><FontAwesomeIcon icon={faCode} /> Projects</h2>
        <p>Check out some of the exciting projects I have worked on:</p>
      </section>
      <section>
        <h3>FrontEnd Development</h3>
        <p></p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 1</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 2</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 3</h3>
            <p>Description of the project and its features.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>BackEnd Development</h3>
        <p></p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 1</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 2</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 3</h3>
            <p>Description of the project and its features.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>AI and Machine Learning</h3>
        <p></p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 1</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 2</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 3</h3>
            <p>Description of the project and its features.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>OOP And Mobile Applications</h3>
        <p></p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 1</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 2</h3>
            <p>Description of the project and its features.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Project 3</h3>
            <p>Description of the project and its features.</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Projects;
