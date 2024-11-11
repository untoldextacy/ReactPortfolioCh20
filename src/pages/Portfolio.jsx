import React from 'react';
import Project from '../components/Project';
import readMePic from '../assets/img/readmegen2.png';
import forumsPic from '../assets/img/forums.jpg';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "ReadMe Generator",
      image: readMePic,
      deployedLink: "https://app.screencastify.com/v3/watch/x2k5KOfchFmP0i21cz79",
      githubLink: "https://github.com/untoldextacy/ProfessionalReadMeGen"
    },
    {
      title: "Light/Dark Forums",
      image: forumsPic,
      deployedLink: "https://untoldextacy.github.io/LightDarkForms/index.html",
      githubLink: "https://github.com/untoldextacy/LightDarkForms"
    },
    // Add up to six projects here
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
