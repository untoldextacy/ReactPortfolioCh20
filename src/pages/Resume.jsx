import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-section">
      <h2>My Resume</h2>
      <p>Download my resume below or check out my skills and proficiencies:</p>
      <div className="proficiencies">
        <h3>Technical Skills:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS / TailwindCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB / PostgreSQL</li>
          <li>Git / GitHub</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>
      <div className="resume-download">
        <a
          href="/path-to-resume/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-download"
        >
          No Resume Yet :D
        </a>
      </div>
    </div>
  );
};

export default Resume;
