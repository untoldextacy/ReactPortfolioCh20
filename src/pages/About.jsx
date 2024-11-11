import React from 'react';
import profilePhoto from '../assets/img/DSC03045.jpg'
import './About.css';

const About = () => {
  return (
    <section className="about">
      <img 
        src={profilePhoto} 
        alt="Chuck Van-Lare" 
        className="about-photo" 
      />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
            Hi! I'm Chuck Van-Lare, an up incoming frontend developer as well as an aspiring photographer.
        </p>
        <p>
            Learning both development as well with photography, I aspire to put the two together to develop something revolutionary.
        </p>
      </div>
    </section>
  );
};

export default About;