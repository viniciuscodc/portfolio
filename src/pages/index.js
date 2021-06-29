import * as React from "react";
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

      <div class='introduction'>
        <h1>Hi, I'm</h1>
        <h2>Vinicius Ortega,</h2>
        <span>web </span><span>developer</span>
        <button>Contact me !</button>
      </div>
 
    </main>
  );
};

export default IndexPage;
