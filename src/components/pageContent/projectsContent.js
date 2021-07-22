import * as React from "react";
import "src/style/reset.css";
import "src/style/projects.scss";
import { Helmet } from "react-helmet";
import Navigation from "src/components/Navigation";
import Social from "src/components/Social";
import Cards from "src/components/Cards";

export default function ProjectPage() {
  return (
    <main>
      <Navigation />
      <Helmet title="Portfolio - Web developer portfolio" bodyAttributes={{ class: "projects-page" }} />
      <Social />
      <h2 className="projects-header">Projects</h2>
        <Cards/>
      <div className="footer-projects">
        <span>©2021. Coded by Vinicius Ortega </span>
      </div>
    </main>
  );
}
