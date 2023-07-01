import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Music = () => {
  useEffect(() => {
    document.title = 'Music | Alidante254';
  }, []);

  return (
    <div className="container">
      <section>
        <h2><FontAwesomeIcon icon={faMusic} /> Music</h2>
        <p>Discover some of my favorite music tracks:</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">Song 1</li>
          <li className="list-group-item m-2 bg-success">Song 2</li>
          <li className="list-group-item m-2 bg-success">Song 3</li>
        </ul>
        <p>Feel free to listen to these tracks and enjoy the melodies!</p>
      </section>
      <section>
        <h3>My Songs</h3>
        <p>This are the tracks I have created ypu can listn to them right here:</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">Song 1</li>
          <li className="list-group-item m-2 bg-success">Song 2</li>
          <li className="list-group-item m-2 bg-success">Song 3</li>
          <li className="list-group-item m-2 bg-success">Song 4</li>
          <li className="list-group-item m-2 bg-success">Song 5</li>
          <li className="list-group-item m-2 bg-success">Song 6</li>
          <li className="list-group-item m-2 bg-success">Song 7</li>
        </ul>
      </section>
      <section>
        <h3>Colaborate</h3>
        <p>Are You a musician? We can colaborate and make the next hit song. You can contact me and we can create a song like for example using one of this instrumentals.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">Song 3</li>
          <li className="list-group-item m-2 bg-success">Song 3</li>
          <li className="list-group-item m-2 bg-success">Song 3</li>
        </ul> 
      </section>
      <section>
        <h3>Connect With Me</h3>
        <p>I am Availble on platforms such as youtube whre you can watch my music videos or listen to my songs on boomplay or sportify.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">Sportify</li>
          <li className="list-group-item m-2 bg-success">Youtube</li>
          <li className="list-group-item m-2 bg-success">Boomplay</li>
        </ul> 
      </section>
    </div>
  );
};

export default Music;
