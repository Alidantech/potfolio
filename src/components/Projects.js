import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Projects = () => {
  useEffect(() => {
    document.title = 'Projects | Alidante254';
  }, []);

  return (
    <div className="container">
      <section className='row'>
        <div className="p-5 col">
        <h2 className="p-5"><FontAwesomeIcon className='m-2 mt-0 mb-0' icon={faCode} /> Projects</h2>
        <p className="lead pb-5 mt-5">Check out some of the exciting projects I have worked on:</p>
        </div>
      <div className='col'>
         <p className='lead pb-5 mt-5'>Some of my best projects are here that I have worked on that are AI realeted using data science skills and machine learning</p>
          <ul className="list-group">
            <li className="list-group-item m-2 bg-primary">upcoming AI</li>
            <li className="list-group-item m-2 bg-primary">Ald-GPT</li>
            <li className="list-group-item m-2 bg-primary">Farm AI</li>
          </ul>
      </div>
      </section>
      <section>
        <h3>FrontEnd Development</h3>
        <p>Here are some of the frontend Projects that I have worked on. I have developed nice UI/UX designs that suits most of the users need. Feel free to view the live demo of the app that I have added a link in each apps description.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Drum Machine</h3>
            <p>A simple drum machine that can play beats.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Random Quote Machine</h3>
            <p>A simple Quote machine that you can see Quotes and be able to tweet them.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Pomodoro Clock</h3>
            <p>A timer watch that you can use it t time time and stopwatch.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>BackEnd Development</h3>
        <p>I have also engaged in projects that involve backend Development and those that deal with databses to enable users interaction.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Wechat</h3>
            <p>A modern online chat app that use php and js and sql to enable user to chat it alos uses machine learning to filter vulgar messages.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Biashara site</h3>
            <p>An online business app to enale people to view Items at the shop and be able to order online and then. They are also able to view the prices</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>upcoming Music</h3>
            <p>A tool that uses django to enable users to listen and post music online and also be able to record music.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>AI and Machine Learning</h3>
        <p>With Rise in the Artificial Inelligence field I have also been updated by developing some tools that Intergrate AI capabilities.</p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Ald-GPT</h3>
            <p>Integrates OpenAI'S ChatGPT that has code generating capabilities to create a code editor tool that helps developers in the development process by genarating files and adding code to them automatically.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>Upcoming</h3>
            <p>A tool that uses machine learning to enalbe musicians to record songs and get feedback on the song effectiveness.</p>
          </li>
          <li className="list-group-item m-2 bg-primary">
            <h3>FarmA-I</h3>
            <p>Uses weather data and API'S to help farmers to monitor crops planting and irrigations using Weather information.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>OOP And Mobile Applications</h3>
        <p></p>
        <ul className="list-group">
          <li className="list-group-item m-2 bg-primary">
            <h3>Mochat</h3>
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
