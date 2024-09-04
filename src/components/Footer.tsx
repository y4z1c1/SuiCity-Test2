import React from 'react';
import '../assets/styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer-links" >
        <li><a href="#faq">faq</a></li>
        <li><a href="#guide">guide</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
