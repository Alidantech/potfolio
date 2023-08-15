import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <section>
        <div className='row'>
          <div className="m-5 p-5 col">
            <h2 className="p-5">PETER IRUNGU</h2>
            <p className="lead pb-5 mt-5">Welcome to my portfolio website!</p>
          </div>
          <div className='col p-5'>
            <img src='bg.jpg' className='img-responsive border' alt='profile'></img>
          </div>
        </div>
        <div className='row text-center'>
          
        </div>
      </section>
      <section>
        <div className="pb-5 mt-5">
          <h3>About Me</h3>
          <p>I am a passionate developer with experience in web development. I have expertise in the the following fields </p>
          <ul>
            <li>Data Science</li>
            <li>Web Development</li>
            <li>Object Oriented Programming</li>
          </ul>
          <p>I find please in developing life changing tech solutions. You can find more information about my career journey <a href="/about">here</a></p>
        </div>
      </section>
      <section>
        <div className="pb-5 mt-5">
          <h3>Projects</h3>
          <p>I have worked on many open source projects. On top of that I have created apps such as potfolios and chat websites. Check out some of my recent projects<a href="/projects"> here</a>.</p>
        </div>
      </section>
      <section>
        <div className="pb-5 mt-5">
          <h3>Music</h3>
          <p>My hobby being listening to relaxing and educative music. I also like singing and have recorded some bangers. If you would like to listen to some of my recorded songs you can find them <a href="/music"> here</a>. also dont forget to like if you find it interesting.</p>
        </div>
      </section>
      </div>
  );
};

export default Home;
