import * as React from "react";
import { Link } from "gatsby";
import "./../style/reset.css";
import "./../style/index.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";

// data

// markup
const IndexPage = () => {
  return (
    <main>
      <Navigation />
      <Helmet title="Home" bodyAttributes={{ class: "home-page" }} />
      <Social />
 
    </main>
  );
};

export default IndexPage;
