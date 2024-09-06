import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import Footer from "./components/Footer";
import Section from "./components/Section"; // Use the correct file casing
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Guide from "./components/Guide";
import Faq from "./components/Faq"; // Import the Faq component

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalState = (isOpen: boolean) => {
    setIsModalOpen(isOpen);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fashion Norsa", "Helvetica", "Arial", "sans-serif"],
      },
      active() {
        console.log("Fonts loaded");
      },
    });
  }, []);

  return (
    <Router>
      {/* Wrap the whole content in a div to apply the blur */}
      <div className={`app-content ${isModalOpen ? "blurred" : ""}`}>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <PlayButton onModalStateChange={handleModalState} />
                <Section /> {/* Display FAQ on the main page */}
              </>
            }
          />
          {/* Add the FAQ route */}
          <Route path="/faq" element={<Faq />} />
          {/* Add the Guide route if needed */}
          <Route path="/guide" element={<Guide />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
