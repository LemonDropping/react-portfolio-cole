import React from "react";
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="container">
          <h1 className="header-title">Cole</h1>
          <Navigation />
        </div>
      </header>
    );
  };
  
  export default Header;
  