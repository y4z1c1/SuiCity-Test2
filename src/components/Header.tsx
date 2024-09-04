import React from 'react';
import '../assets/styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title-container">
        <img src="/logo.png" alt="SuiCity Logo" className="logo" />
        <h1 className="suicity-title parallax"  data-speed="1">SuiCity</h1>
      </div>
    </header>
  );
};

export default Header;
