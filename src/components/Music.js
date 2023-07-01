import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Music = () => {
  useEffect(() => {
    document.title = 'Music | Alidante254';
  }, []);

  return (
    <div>
      <h2><FontAwesomeIcon icon={faMusic} /> Music</h2>
      <p className="text-muted">Discover some of my favorite music tracks:</p>
      <ul className="list-group">
        <li className="list-group-item">Song 1</li>
        <li className="list-group-item">Song 2</li>
        <li className="list-group-item">Song 3</li>
      </ul>
      <p>Feel free to listen to these tracks and enjoy the melodies!</p>
    </div>
  );
};

export default Music;
