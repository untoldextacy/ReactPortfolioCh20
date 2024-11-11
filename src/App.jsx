import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './components/header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/footer.jsx';
import './styles/style.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="hero">
      <h1>Welcome to My World</h1>
      <button className="cta-button" onClick={handleButtonClick}>
        Explore My Projects
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
