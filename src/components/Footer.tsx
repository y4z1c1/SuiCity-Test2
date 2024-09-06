import React from "react";
import "../assets/styles/Footer.css";

const Footer: React.FC = () => {
  return (
    // Inside Footer.tsx
    <footer className="footer" id="footer">
      <div>
        <ul className="footer-links">
          <li>
            <a href="https://twitter.com/suicity">twitter</a>
          </li>
          <li>
            <a href="https://discord.com/suicity">discord</a>
          </li>
          <li>
            <a href="https://github.com/suicity">mail us</a>
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
