import * as React from "react";
import "src/style/reset.css";
import "src/style/index.scss";
import { Helmet } from "react-helmet";
import {Link} from "gatsby";
import Navigation from "src/components/Navigation";
import Social from "src/components/Social";
import { Canvas, useFrame } from '@react-three/fiber'

export default function IndexPage() {
  return (
    <main>

      <Navigation />
      <Helmet title="Home - Web developer portfolio" bodyAttributes={{ class: "home-page" }} />
      <Social />
      <div className="introduction">
        <h1>Hi, I'm</h1>
        <h2>Vinicius Ortega,</h2>
        <span>web </span>
        <span>developer</span>
        <Link to="/contact"><button >Contact me !</button></Link>
      </div>
      <div><p>test</p></div>
      <span className="footer-index">©2021. Coded by Vinicius Ortega </span>
    </main>
  );
}
