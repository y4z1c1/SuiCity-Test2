import React, { useEffect, useState } from 'react';
import '../assets/styles/Header.css';

const Header: React.FC = () => {

    const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect if the browser is Safari
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);
  }, []);
  return (
    <header className="header">
      <div className="logo-title-container">
        <img src="/logo.png" alt="SuiCity Logo" className="logo" />

        {isSafari ? (
            <img src="/title.png" alt="SuiCity Logo" className="title" />
          ) : (
            <h1 className="suicity-title">SuiCity</h1>
          )}


      </div>
    </header>
  );
};

export default Header;
