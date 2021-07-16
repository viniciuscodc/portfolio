import * as React from "react";
import "./../style/contact.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";

export default function ContactPage() {
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
          <li>viniciuscodc@gmail.com</li>
          <li><a>Instagram</a></li>
          <li><a>Linkedin</a></li>
          <li><a>Github</a></li>
          <li>Myresume.pt.pdf</li>
          <li>Myresume.en.pdf</li>
        </ul>
      </div>
    </main>
  );
}
