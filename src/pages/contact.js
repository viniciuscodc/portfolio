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
    </main>
  );
}
