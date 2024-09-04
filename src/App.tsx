import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PlayButton from './components/PlayButton';
import Footer from './components/Footer';
import WebFont from 'webfontloader';


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalState = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  useEffect(() => {
    // Detect if the browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // If Safari is detected, add a class to the body
    if (isSafari) {
      document.body.classList.add('safari');
    }
  }, []); // Empty dependency array ensures this runs once on mount


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Fashion Norsa', 'Helvetica', 'Arial', 'sans-serif'],
      },
      active() {
        console.log('Fonts loaded');
      },
    });
  }, []);

  return (
    <div>
      {/* Wrap the whole content in a div to apply the blur */}
      <div className={`app-content ${isModalOpen ? 'blurred' : ''}`}>
        <Header />
        <PlayButton onModalStateChange={handleModalState} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
