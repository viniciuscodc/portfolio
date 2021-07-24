import * as React from "react";
import { Link } from "gatsby";
import "src/style/mobileMenu.scss";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
      <div className="mobile-links">
        <nav>
          <hr />
          <li>
            <Link to="/">Home</Link>
          </li>
          <hr />
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <hr />
          <li>
            <Link to="/about">About</Link>
          </li>
          <hr />
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <hr />
        </nav>
        <div className="mobile-social">
          <div>
            <a href="https://www.instagram.com/viniciuswortega/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size="40" />
            </a>
            <a href="https://www.linkedin.com/in/vinicius-ortega" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size="40" />
            </a>
            <a href="https://github.com/viniciuscodc" target="_blank" rel="noopener noreferrer">
              <FaGithub size="40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
