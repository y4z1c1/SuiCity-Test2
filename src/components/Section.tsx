import "../assets/styles/Section.css";

const Section: React.FC = () => {
  return (
    <div className="sec-container">
      <img data-depth="0.2" src="/cloud.png" alt="cloud" id="cloud" />
      {/* First Block: Text on the left, Image on the right */}
      <div className="text-image-block">
        <div className="text-left">
          <h2>Introduction to SuiCityP2E</h2>
          <p>
            SuiCityP2E is an innovative city-building game set on the Sui
            blockchain, where players can create, upgrade, and manage their own
            digital cities. Utilizing the power of dynamic NFTs (dNFTs),
            SuiCityP2E offers a unique Play2Airdrop experience that goes beyond
            traditional gaming. Not just a game; it's a growing ecosystem that
            leverages blockchain technology to create a sustainable, engaging,
            and rewarding experience for its players. Whether you're a seasoned
            gamer or new to the world of blockchain, SuiCityP2E offers something
            for everyone.
          </p>

          <h3>How to Start and Play In SuiCityP2E</h3>
          <p>
            Players begin by freeminting a non-tradeable NFT that represents the
            foundation of their city. This NFT includes four main buildings:
            Entertainment, Factory, House, and Office. All buildings start at
            level 0, and each one impacts different aspects of the game.
            Upgrading these buildings not only strengthens their specific
            attributes—such as increasing production or extending claim
            intervals—but also contributes to the aesthetic of your city,
            enhancing the visual appearance, metadata, and rarity of the SuiCity
            NFT, thanks to the use of dynamic NFTs. To optimize their city's
            growth, players need to log in at specific intervals to claim their
            accumulated $SITY tokens and collect daily factory bonuses.
            SuiCityP2E is also about strategy, where players must decide whether
            to hold their $SITY tokens or use them to upgrade their buildings,
            as each choice will impact the development and success of their
            city.
          </p>
        </div>
        <div className="image-right">
          <img src="/build.png" alt="First Image" />
        </div>
      </div>
      {/* Second Block: Text on the right, Image on the left */}
      <div className="text-image-block">
        <div className="image-left">
          <img src="/build.png" alt="Second Image" />
        </div>
        <div className="text-right">
          <h2>$SITY</h2>
          <p>
            The game's native token, $SITY, is fully community-owned and can be
            earned through various in-game activities. Currently, $SITY is not
            listed on any DEX or CEX, so players should be cautious of scams.
            Since SuiCity is a Play2Airdrop game, $SITY will be listed once the
            game reaches a certain stage. So, freemint your SuiCity NFT and
            start accumulating $SITY tokens! Primary goal is to gather as much
            $SITY as possible before it gets listed.
          </p>
          <h3>How to Earn $SITY In SuiCityP2E</h3>
          <p>
            $SITY can be earned through various in-game activities, making it
            the core currency of your city’s growth. Players can accumulate
            $SITY by collecting daily factory revenue and earning passive income
            based on the level of their Office (More info in the Buildings
            section). To collect these earnings, players need to log in at
            specific intervals, ensuring they maximize their city's
            productivity. Additionally, early community members, test players,
            and active Sui users may receive $SITY airdrops, giving them a head
            start in the game. Players can also earn 1500 $SITY for each friend
            they invite to the game through a referral invitation. Furthermore,
            $SITY can be earned through various in-game social media tasks,
            Zealy tasks, art, and content creation events.
          </p>
        </div>
      </div>
      read more
    </div>
  );
};

export default Section;
