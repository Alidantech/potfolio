import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  useEffect(() => {
    document.title = 'About | Alidante254';
  }, []);

  return (
    <div>
      <h2><FontAwesomeIcon icon={faUser} /> About</h2>
      <p className="text-muted">Welcome to my portfolio! I'm a passionate web developer with expertise in frontend technologies. I have experience building modern and responsive web applications using React and other frameworks.</p>
      <p>In this section, you'll find more information about my background, skills, and professional experience. Feel free to explore and learn more about me.</p>
    </div>
  );
};

export default About;
