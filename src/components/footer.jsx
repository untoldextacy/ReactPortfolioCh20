import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/untoldextacy" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x"></i> LinkedIn
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x"></i> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;