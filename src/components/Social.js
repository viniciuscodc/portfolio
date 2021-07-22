import * as React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "src/style/social.scss";

export default function Social(){
  return (
    <div className="nav-social">
          <a href="https://www.instagram.com/viniciuswortega/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="30" />
            </a>
          <a href="https://www.linkedin.com/in/vinicius-ortega" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="30" />
          </a>
          <a href="https://github.com/viniciuscodc" target="_blank" rel="noopener noreferrer">
            <FaGithub size="30" />
          </a>
    </div>
  );
};




