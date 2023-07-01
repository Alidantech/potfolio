import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h2 className="mt-4">Home</h2>
      <p className="lead">Welcome to my portfolio website!</p>
      <div className="row">
        <div className="col-md-6">
          <h3>About Me</h3>
          <p>I am a passionate developer with experience in web development.</p>
        </div>
        <div className="col-md-6">
          <h3>Projects</h3>
          <p>Check out some of my recent projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
