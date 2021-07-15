import * as React from "react";
import "./../style/reset.css";
import "./../style/projects.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";
import image from "./../images/image-1.png";

const projects = [
  {
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS2",
    tag_2: "HTML2",
    tag_3: "Javascript",
  },
];

function CardTag(cardTagData) {
  function isNotNull(x) {
    return typeof x !== "undefined";
  }

  let tag_1 = projects[cardTagData.cardIndex].tag_1;
  if (isNotNull(tag_1)) {
    let spanText = cardTagData.cardTagData.tag_1;
    var spanElement = React.createElement("span", { key: spanText }, spanText);
  }

  let tag_2 = projects[cardTagData.cardIndex].tag_2;
  if (isNotNull(tag_2)) {
    let spanText = cardTagData.cardTagData.tag_2;
    var spanElement2 = React.createElement("span", { key: spanText }, spanText);
  }

  let spanList = [spanElement, spanElement2];

  return spanList;
}

export default function ProjectPage() {
  return (
    <main>
      <Navigation />
      <Helmet title="Projects" bodyAttributes={{ class: "projects-page" }} />
      <Social />

      <h2 className="projects-header">Projects</h2>

      <div className="card-grid">
        {projects.map(function (card, index) {
          return (
            <div key={index} className="card">
              <div className="card-image">
                <img src={image} alt="card-img" />
              </div>
              <div className="card-information">
                <p>{card.description}</p>
              </div>
              <div className="tag-container">
                <CardTag cardTagData={card} cardIndex={index} />
              </div>
              <div className="card-button">
                <span>Check</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
