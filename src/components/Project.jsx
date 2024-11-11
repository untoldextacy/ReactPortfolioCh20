import React from 'react';
import './Project.css';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <div className="project-links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;