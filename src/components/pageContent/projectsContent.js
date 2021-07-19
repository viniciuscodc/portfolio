import * as React from "react";
import "./../../style/reset.css";
import "./../../style/projects.scss";
import Navigation from "./../Navigation";
import Social from "./../Social";
import { Helmet } from "react-helmet";
import image from "./../../images/projects/image-1.png"

const projects = [
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 4,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 3,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },

  {
    id: 2,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },

  {
    id: 1,
    description:
      "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Docker",
    tag_4: "React",
    tag_5: "Javascript",
  },
];

function CardTag(cardTagData) {
  
  function isNotUndfined(valueChecked) {
    return typeof valueChecked !== "undefined";
  }

  let tags = [
    projects[cardTagData.cardIndex].tag_1,
    projects[cardTagData.cardIndex].tag_2,
    projects[cardTagData.cardIndex].tag_3,
    projects[cardTagData.cardIndex].tag_4,
    projects[cardTagData.cardIndex].tag_5,
  ];

  let spanList = tags
    .filter((span) => isNotUndfined(span))
    .map(
      (span) =>
        (span = React.createElement(
          "span",
          { key: span + projects[cardTagData.cardIndex].id },
          span
        ))
    );

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
      <div className="footer-projects">
        <span>©2021. Coded by Vinicius Ortega </span>
      </div>
    </main>
  );
}
