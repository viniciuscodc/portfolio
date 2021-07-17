import * as React from "react";
import "./../style/contact.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";

function changeText(id, oldText, newText) {
  function textCheck(id) {
    return document.getElementById(id).innerHTML;
  }

  function changeHtmlContent(id, oldText) {
    document.getElementById(id).innerHTML = oldText;
  }
  // console.log(id)
}

function getx() {
  document.getElementById("xz").style.color = "red";
  //console.log(email)
}

//let reactElement = ReactDOM.findDOMNode(this.refs.refName)

// email.addEventListener("mouseenter", function( event ) {
//   // highlight the mouseenter target
//   event.target.style.color = "purple";
//   event.target.innerHTML = "teste"

// }, false);

export default function ContactPage() {

  const email = React.useRef(null);
  const resumeEn = React.useRef(null);
  const resumePt = React.useRef(null);

  function emailChangeText() {
    email.current.innerHTML = "Copy to clipboard";
  }

  function emailReturnText() {
    email.current.innerHTML = "viniciuscodc@gmail.com";
  }

  function resumeEnChangeText() {
    resumeEn.current.innerHTML = "Download";
  }

  function resumeEnReturnText() {
    resumeEn.current.innerHTML = "Myresume.pt.pdf";
  }

  function resumePtChangeText() {
    resumePt.current.innerHTML = "Download";
  }

  function resumePtReturnText() {
    resumePt.current.innerHTML = "Myresume.en.pdf";
  }

  /* Create arrow functions in html*/



  return (
    <main>
      <Navigation />
      <Helmet title="Contact" bodyAttributes={{ class: "contact-page" }} />
      <Social />
      <div className="contact-container">
        <h2 className="contact-header">Get in touch</h2>
        <p>
          I’m looking for opportunities, freelance or a fixed job. My inbox is
          open, feel free to contact me to give me feedback about my projects or
          discuss. I’ll reply to your message as soon as possible.
        </p>
        <ul>
          <li
            ref={email}
            onMouseEnter={() => {email.current.innerHTML = "Copy to clipboard";}}                  
            onMouseOut={emailReturnText}
            onClick={() => {navigator.clipboard.writeText("viniciuscodc@gmail.com")}}
          >
            viniciuscodc@gmail.com
          </li>
          <li>
            <a
              href="https://www.instagram.com/viniciuswortega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vinicius-ortega"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/viniciuscodc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li     
            ref={resumeEn}
            onMouseEnter={resumeEnChangeText}
            onMouseOut={resumeEnReturnText}
            >Myresume.pt.pdf</li>
          <li
          ref={resumePt}
          onMouseEnter={resumePtChangeText}
          onMouseOut={resumePtReturnText}
          >Myresume.en.pdf</li>
        </ul>
      </div>
    </main>
  );
}
