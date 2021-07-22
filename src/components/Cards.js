import * as React from "react";
import "src/style/card.scss";
import image from "src/images/projects/image-1.png";

const projects = [
  {
    id: 10,
    description:
      "A backend project, it's a interative list displayer where you can add/remove/edit items, the information is stored in a database managed by Entity framework.",
    tag_1: "C#",
    tag_2: ".NET Core",
    tag_3: "Bootstrap",
    tag_4: "CSS",
    tag_5: "HTML",
  },
  {
    id: 9,
    description:
      "A portfolio that contains some things I have been learning, it's the page you are acessing right now. A react focused project, I used gatsby to manage page routing and designed it in Figma.",
    tag_1: "SASS",
    tag_2: "HTML",
    tag_3: "ThreeJS",
    tag_4: "React",
    tag_5: "Javascript",
  },
  {
    id: 8,
    description:
      "Website I made for a Polaris dealer in Curitiba. A responsive website designed in Adobe XD , coded in HTML, CSS, Javascript and PHP for contact page.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Jquery",
    tag_4: "React",
    tag_5: "OwlCarousel",
  },
  {
    id: 7,
    description:
      "The new website I made for my old junior enterprise. It's using smart scroll, zoom animations and other nice features ",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 6,
    description:
      "This project is a clone from https://www.inttegraej.com.br/ a website I made long time ago using google sites . The website belongs to my old junior enterprise.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 5,
    description:
      "PokeAPI based project website, you can type pokemon name or number and a api call will return information about pokemon you chose.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "API",
    tag_4: "Javascript",
  },
  {
    id: 4,
    description:
      "This is a animated pizza topping selector. Coded in CSS, HTML and Javascript.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 3,
    description: "A image preview gallery made in CSS, Javascript and HTML.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },

  {
    id: 2,
    description:
      "A game made in java inspired in Atari's 1973 SpaceRace classic. The objective is reach the end of the screen without been hit.",
    tag_1: "Java",
  },

  {
    id: 1,
    description:
      "A Java implementation of the classic 1972 game using Java AWT, Swing.",
    tag_1: "Java",
  },
];

function CardTag(cardTagData) {
  function isNotUndefined(valueChecked) {
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
    .filter((span) => isNotUndefined(span))
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

export default function Cards() {
  return (
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
  );
}
