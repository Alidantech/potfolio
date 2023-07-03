import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';


const Music = () => {
  useEffect(() => {
    document.title = 'Music | Alidante254';
  }, []);

  return (
    <div className="container">
      <section className='row'>
        <div className="p-5 col">
          <h2 className="p-5"><FontAwesomeIcon className='m-2 mt-0 mb-0' icon={faMusic} /> Music</h2>
          <p className="lead pb-5 mt-5">Discover some of my favorite music tracks:</p>
        </div>
        <div className='col'>
          <p className='lead pb-5 mt-5'>Feel free to listen to these tracks and enjoy the melodies!</p>
          <ul className="list-group">
            <li className="list-group-item m-2 bg-success">Plutonc Love</li>
            <li className="list-group-item m-2 bg-success">Manserera</li>
            <li className="list-group-item m-2 bg-success">This is home</li>
          </ul>
        </div>
      </section>
      <section>
        <h3>My Songs</h3>
        <p>This are the tracks I have created you can listn to them right here:</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">This is home</li>
          <li className="list-group-item m-2 bg-success">Manserera</li>
          <li className="list-group-item m-2 bg-success">Wishes Itches</li>
          <li className="list-group-item m-2 bg-success">Wana, Mina</li>
          <li className="list-group-item m-2 bg-success">Happy</li>
          <li className="list-group-item m-2 bg-success">Vampires Love</li>
          <li className="list-group-item m-2 bg-success">Dance With You</li>
        </ul>
      </section>
      <section>
        <h3>Colaborate</h3>
        <p>Are You a musician? We can colaborate and make the next hit song. You can contact me and we can create a song like for example using one of this instrumentals.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-success">High Tide Juice World Type Beat</li>
          <li className="list-group-item m-2 bg-success">Alone Time pop instrumentals</li>
          <li className="list-group-item m-2 bg-success">Trust Emotional Instrumental</li>
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
