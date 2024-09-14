import React from "react";
import "../assets/styles/PlayButton.css";

const PlayButton: React.FC = () => {
  const redirectToDemo = () => {
    window.location.href = "https://demo.suicityp2e.com";
  };

  return (
    <div className="play-button-container">
      <button className="play-button" onClick={redirectToDemo}>
        Play Demo
      </button>
    </div>
  );
};

export default PlayButton;
