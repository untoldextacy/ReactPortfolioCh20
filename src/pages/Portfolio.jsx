import React from 'react';
import Project from '../components/Project';
import readMePic from '../assets/img/readmegen2.png';
import forumsPic from '../assets/img/forums.jpg';
import planesPic from '../assets/img/itinarary.jpg'
import notePic from '../assets/img/notepadimg.png'
import './portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "ReadMe Generator",
      image: readMePic,
      deployedLink: "https://app.screencastify.com/v3/watch/x2k5KOfchFmP0i21cz79",
      githubLink: "https://github.com/untoldextacy/ProfessionalReadMeGen"
    },
    // Add up to six projects here
    {
      title: "Light/Dark Forums",
      image: forumsPic,
      deployedLink: "https://untoldextacy.github.io/LightDarkForms/index.html",
      githubLink: "https://github.com/untoldextacy/LightDarkForms"
    },
    {
      title: "Travel Buddy - An Interactive Travel Itinerary Planner",
      image: planesPic,
      deployedLink: "https://travel-buddy-zkdg.onrender.com/",
      githubLink: "https://github.com/MiguelPena0101/Travel-Buddy"
    },
    {
      title: "J.A.T.E. - Just Another Text Editor",
      image: notePic,
      deployedLink: "https://texteditorch19.onrender.com/",
      githubLink: "https://github.com/untoldextacy/TextEditorCh19/"
    },
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
