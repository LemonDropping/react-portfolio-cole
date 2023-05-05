import React, { useState } from 'react';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './styles/App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
