import * as React from "react";
import "./../../style/reset.css";
import "./../../style/index.scss";
import { Helmet } from "react-helmet";
import {Link} from "gatsby";
import Navigation from "./../Navigation";
import Social from "./../Social";

export default function IndexPage() {
  return (
    <main>

      <Navigation />
      <Helmet title="Home" bodyAttributes={{ class: "home-page" }} />
      <Social />
      <div className="introduction">
        <h1>Hi, I'm</h1>
        <h2>Vinicius Ortega,</h2>
        <span>web </span>
        <span>developer</span>
        <Link to="/contact"><button >Contact me !</button></Link>
      </div>
      <span className="footer-index">©2021. Coded by Vinicius Ortega </span>
    </main>
  );
}
