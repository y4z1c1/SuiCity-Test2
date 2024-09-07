import React from "react";
import "../assets/styles/Footer.css";
import { FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

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
            >
              <FaTwitter className="footer-icon" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="discord-soon"
              title="Coming Soon" // Tooltip message
            >
              <FaDiscord className="footer-icon" />
            </a>
          </li>
          <li>
            <a href="mailto:suicity.p2e@gmail.com">
              <FaEnvelope className="footer-icon" />
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
