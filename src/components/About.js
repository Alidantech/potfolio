import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  useEffect(() => {
    document.title = 'About | Alidante254';
  }, []);

  return (
    <div className="container">
      <section>
      <div className='row'>
        <div className='p-5 col'>
        <h2 className='p-5'><FontAwesomeIcon className='m-2 mt-0 mb-0' icon={faUser} /> About</h2>
        </div>
      <div className='col p-5'>
        <h6 className='p-2'>Data Scientist</h6>
        <h6 className='p-2'>Software Developer</h6>
      </div>
      </div>
      
      <div>
         <p className='lead pb-5 mt-5'>Welcome to my portfolio! I'm a passionate web developer with expertise in frontend technologies. I have experience building modern and responsive web applications using React and other frameworks.</p>
        <p className='lead pb-5 mt-5'>In this section, you'll find more information about my background, skills, and professional experience. Feel free to explore and learn more about me.</p>
      </div>
        
      </section>
       <section>
      <h3 className='p-2'>Skills</h3>
          <ul>
            <li>Data Science</li>
            <li>Web Development</li>
            <li>Object Oriented Programming</li>
          </ul>
       </section>
        <section>
         <h3 className='p-2'>Education</h3>
      <p>I have done many online courses and have earned mny certificate from organizations such as W3schools, FreecodeCamp and Youtube channels.</p>
        </section>
        <section>
          <h3 className='p-2'>Experience</h3>
          I have gained experience ove the years  through working on
          projects such as developing user interfaces and also developing algorthims that are efficint. I have also corparated on open souce projects for years.
        </section>
    </div>
  );
};

export default About;
