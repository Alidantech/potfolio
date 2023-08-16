import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid bg-light">
      <section className="py-5">
        <div className='row'>
          <div className="col-lg-6 m-5 p-5">
            <h2 className="display-4 mb-4">PETER IRUNGU</h2>
            <p className="lead mb-5">Welcome to my portfolio website!</p>
          </div>
          <div className='col-lg-4 col-md-6 p-5'>
            <img src='bg.jpg' className='img-fluid rounded border' alt='profile'></img>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="text-center">
          <h3 className="mb-4">About Me</h3>
          <p className="lead">I am a passionate developer with experience in web development. I have expertise in the following fields:</p>
          <ul className="list-unstyled">
            <li>Data Science</li>
            <li>Web Development</li>
            <li>Object-Oriented Programming</li>
          </ul>
          <p>I find pleasure in developing life-changing tech solutions. You can find more information about my career journey <a href="/about">here</a>.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="text-center">
          <h3 className="mb-4">Projects</h3>
          <p>I have worked on many open source projects. Additionally, I have created apps such as portfolios and chat websites. Check out some of my recent projects <a href="/projects">here</a>.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="text-center">
          <h3 className="mb-4">Music</h3>
          <p>My hobby is listening to relaxing and educative music. I also enjoy singing and have recorded some great songs. If you'd like to listen to some of my recorded songs, you can find them <a href="/music">here</a>. Don't forget to give a thumbs up if you find them interesting!</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
