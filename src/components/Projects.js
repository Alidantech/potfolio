import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Alidante254';
  }, []);

  return (
    <div>
      <h2><FontAwesomeIcon icon={faCode} /> Projects</h2>
      <p className="text-muted">Check out some of the exciting projects I have worked on:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Project 1</h3>
          <p>Description of the project and its features.</p>
        </li>
        <li className="list-group-item">
          <h3>Project 2</h3>
          <p>Description of the project and its features.</p>
        </li>
        <li className="list-group-item">
          <h3>Project 3</h3>
          <p>Description of the project and its features.</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
