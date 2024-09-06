// Guide.tsx
import React from "react";
import "../assets/styles/Guide.css"; // Assuming you want a separate CSS file for styles

const Guide: React.FC = () => {
  return (
    <div className="guide-container">
      <h1>Welcome to the SuiCityP2E Guide</h1>
      <p>
        In this guide, you'll learn how to start your journey in SuiCityP2E.
        Here are the steps:
      </p>
      <ol>
        <li>Freemint your SuiCity NFT to represent your city.</li>
        <li>
          Upgrade your buildings: Entertainment Complex, Factory, House, and
          Residential Office.
        </li>
        <li>Earn $SITY tokens by upgrading and participating in the game.</li>
        <li>
          Engage with the SuiCity community and get involved in special events
          to earn rewards.
        </li>
      </ol>
      <p>
        Stay tuned for more tips and strategies to enhance your SuiCity
        experience!
      </p>
    </div>
  );
};

export default Guide;
