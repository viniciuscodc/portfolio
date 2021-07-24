import * as React from "react";
import "src/style/reset.css";
import "src/style/contact.scss";
import { Helmet } from "react-helmet";
import Navigation from "src/components/Navigation";
import Social from "src/components/Social";

export default function ContactPage() {
  const email = React.useRef(null);
  const resumeEn = React.useRef(null);
  const resumePt = React.useRef(null);

  return (
    <main>
      <Navigation />
      <Helmet title="Contact - Web developer portfolio" bodyAttributes={{ class: "contact-page" }} />
      <Social />
      <div className="contact-container">
        <h2 className="contact-header">Get in touch</h2>
        <p>
          I’m looking for opportunities, freelance or a fixed job. My inbox is open, feel free to contact me
          to give me feedback about my projects or discuss. I’ll reply to your message as soon as possible.
        </p>
        <ul>
          <li
            ref={email}
            onMouseEnter={() => {
              email.current.innerHTML = "Copy to clipboard";
            }}
            onMouseOut={() => {
              email.current.innerHTML = "viniciuscodc@gmail.com";
            }}
            onClick={() => {
              navigator.clipboard.writeText("viniciuscodc@gmail.com");
            }}
          >
            viniciuscodc@gmail.com
          </li>
          <li>
            <a href="https://www.instagram.com/viniciuswortega/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vinicius-ortega" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/viniciuscodc" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li
            ref={resumeEn}
            onMouseEnter={() => {
              resumeEn.current.innerHTML = "Download";
            }}
            onMouseOut={() => {
              resumeEn.current.innerHTML = "Myresume.pt.pdf";
            }}
          >
            Myresume.pt.pdf
          </li>
          <li
            ref={resumePt}
            onMouseEnter={() => {
              resumePt.current.innerHTML = "Download";
            }}
            onMouseOut={() => {
              resumePt.current.innerHTML = "Myresume.en.pdf";
            }}
          >
            Myresume.en.pdf
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <span>©2021. Coded by Vinicius Ortega </span>
      </div>
    </main>
  );
}
