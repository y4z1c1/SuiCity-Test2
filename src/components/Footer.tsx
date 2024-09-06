import React from "react";
import "../assets/styles/Footer.css";

const Footer: React.FC = () => {
  return (
    // Inside Footer.tsx
    <footer className="footer" id="footer">
      <div>
        <ul className="footer-links">
          <li>
            <a href="https://twitter.com/suicityp2e">Twitter</a>
          </li>
          <li>
            <a>Discord</a>
          </li>
          <li>
            <a href="mailto:suicity.p2e@gmail.com">Mail</a>
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
