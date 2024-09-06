import "../assets/styles/Section.css";

const Section: React.FC = () => {
  return (
    <div className="sec-container">
      <img data-depth="0.2" src="/cloud.png" alt="cloud" id="cloud" />
      {/* First Block: Text on the left, Image on the right */}
      <div className="text-image-block">
        <div className="text-left">
          <h2>Freemint your SuiCity NFT and start earning $SITY!</h2>
          <p>
            Start the game with the Office, Factory, House, and Entertainment
            Complex buildings in your SuiCity NFT and enjoy the benefits of dNFT
            technology!
          </p>
        </div>
        <div className="image-right">
          <img src="/city.png" alt="First Image" />
        </div>
      </div>
      {/* Second Block: Text on the right, Image on the left */}
      <div className="text-image-block">
        <div className="image-left">
          <img src="/build2.png" alt="Second Image" />
        </div>
        <div className="text-right">
          <h2>Build your City and Claim your rewards!</h2>
          <p>
            Increase your SuiCity's development and population, and climb the
            leaderboard. Accumulate as much $SITY as possible before the
            listing!
          </p>
        </div>
      </div>

      <div className="text-image-block">
        <div className="text-left">
          <h2>Upgrade your Buildings and increase your $SITY revenue!</h2>
          <p>
            Maximize your city's productivity and boost your $SITY earnings.
            Each upgrade enhances your city's capabilities, allowing you to
            generate more passive income and accelerate your growth in
            SuiCityP2E!
          </p>
        </div>
        <div className="image-right">
          <img src="/coins2.png" alt="First Image" />
        </div>
      </div>
    </div>
  );
};

export default Section;
