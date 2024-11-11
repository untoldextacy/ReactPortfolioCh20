import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
      <h1>Chuck Van-Lare</h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;