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
        <h2><FontAwesomeIcon icon={faUser} /> About</h2>
        <p className="text-muted">Welcome to my portfolio! I'm a passionate web developer with expertise in frontend technologies. I have experience building modern and responsive web applications using React and other frameworks.</p>
        <p>In this section, you'll find more information about my background, skills, and professional experience. Feel free to explore and learn more about me.</p>
      </section>
       <section>
      <h3>Skills</h3>
      <ul>
            <li>Data Science</li>
            <li>Web Development</li>
            <li>Object Oriented Programming</li>
          </ul>
       </section>
        <section>
         <h3>Education</h3>
      <p>I have done many online courses and have earned mny certificate from organizations such as W3schools, FreecodeCamp and Youtube channels.</p>
        </section>
        <section>
          <h3>Experience</h3>
          I have gained experience ove the years  through working on
          projects such as developing user interfaces and also developing algorthims that are efficint. I have also corparated on open souce projects for years.
        </section>
    </div>
  );
};

export default About;
