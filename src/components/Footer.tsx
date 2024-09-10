import React from "react";
import "../assets/styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <div>
        <ul className="footer-links">
          <li>
            <a
              href="https://twitter.com/suicityp2e"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Link for SuiCityP2E"
            >
              Twitter{" "}
            </a>
          </li>

          <li>
            <a href="mailto:suicity.p2e@gmail.com" aria-label="Mail SuiCityP2E">
              Mail
            </a>
          </li>

          <li>
            <a
              href="https://zealy.io/cw/suicityp2e/questboard"
              target="_blank"
              aria-label="Zealy Link for SuiCityP2E"
            >
              Zealy
            </a>
          </li>

          <li>
            <a
              href="https://suigallerie.xyz/space/suicityp2e "
              target="_blank"
              aria-label="Sui Gallerie Link for SuiCityP2E"
            >
              Sui Gallerie
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="footer-reserved">SuiCity © 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
