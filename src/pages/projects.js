import * as React from "react";
import "./../style/reset.css";
import "./../style/projects.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";
import image from "./../images/image-1.png";

const ProjectPage = () => {
  return (
    <main>
      <Navigation />
      <Helmet
        title="Projects"
        bodyAttributes={{ className: "projects-page" }}
      />
      <Social />

      <h2 className="projects-header">Projects</h2>

      <div className="card-grid">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="image"/>
          </div>
          <div className="card-information">
            <p>
              Website feito para a concessionária Polaris em Curitiba. O website
              é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS,
              Javascript e PHP para a página de contato.
            </p>
          </div>
          <div className="tag-container">
            
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
          </div>
          <div className="card-button">
            <span>Check</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
