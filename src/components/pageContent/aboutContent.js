import * as React from "react";
import "src/style/about.scss";
import { Helmet } from "react-helmet";
import Navigation from "src/components/Navigation";
import Social from "src/components/Social";

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <Helmet title="About - Web developer portfolio" bodyAttributes={{ class: "about-page" }} />
      <Social />
      <div className="about-container">
        <h2>About me</h2>
        <p>
          Hello! My name is Vinicius Ortega and almost graduated in civil
          engineering. I like messing around with computers since I was litte,
          doing hardware fixing and some simple software maintenance . I started
          programming back in 2016 in C language at university and no surprise
          really enjoyed it.
        </p>
        <p>
          Later in 2021 I decided to start learning a modern language, because
          back in time I really liked C language classes. I learned Java and did
          some projects, this time I got hooked by it and started as a hobby,
          programming every day. Than I meet the <span>world </span>of web
          development and kept learning until now.
        </p>
        <p>
          I hope my projects can be viewed at different places in the{" "}
          <span>globe</span>, I’ll be updating my portfolio to improve it and
          check my knowledge progress.
        </p>
      </div>
      <div className="footer-about">
        <span>©2021. Coded by Vinicius Ortega </span>
      </div>
    </main>
  );
}
