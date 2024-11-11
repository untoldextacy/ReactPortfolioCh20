import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink to="/about" activeClassName="active">About Me</NavLink>
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      <NavLink to="/resume" activeClassName="active">Resume</NavLink>
    </nav>
  );
};

export default Navigation;
