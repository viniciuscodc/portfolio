import * as React from "react";
import "src/style/card.scss";
import image1 from "src/images/projects/image-1.png";
import image2 from "src/images/projects/image-2.png";
import image3 from "src/images/projects/image-3.png";
import image4 from "src/images/projects/image-4.png";
import image5 from "src/images/projects/image-5.png";
import image6 from "src/images/projects/image-6.png";
import image7 from "src/images/projects/image-7.png";
import image8 from "src/images/projects/image-8.png";
import image9 from "src/images/projects/image-9.png";
import image10 from "src/images/projects/image-10.png";

const projects = [
  {
    id: 10,
    description:
      "A backend project, it's a interative list displayer where you can add/remove/edit items, the information is stored in a database managed by Entity framework.",
    link: "https://github.com/viniciuscodc/InAndOut",
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
    link: "",
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
    link: "https://www.cwbpolaris.com.br/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Jquery",
    tag_4: "OwlCarousel",
    tag_5: "PHP",
  },
  {
    id: 7,
    description:
      "The new website I made for my old junior enterprise. It's using smart scroll, zoom animations and other nice features ",
    link: "https://viniciuscodc.github.io/Inttegra-Website/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 6,
    description:
      "This project is a clone from https://www.inttegraej.com.br/ a website I made long time ago using google sites . The website belongs to my old junior enterprise.",
    link: "https://viniciuscodc.github.io/Inttegra/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 5,
    description:
      "PokeAPI based project website, you can type pokemon name or number and a api call will return information about pokemon you chose.",
    link: "https://viniciuscodc.github.io/PokemonSearch/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "API",
    tag_4: "Javascript",
  },
  {
    id: 4,
    description:
      "This is a animated pizza topping selector. Coded in CSS, HTML and Javascript.",
    link: "https://viniciuscodc.github.io/Pizza-Selector/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    id: 3,
    description:
      "Media gallery displayed in grid, images can be clicked to display a slideshow, made in CSS, HTML and Javascript.",
    link: "https://viniciuscodc.github.io/Gallery/",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },

  {
    id: 2,
    description:
      "A game made in java inspired in Atari's 1973 SpaceRace classic. The objective is reach the end of the screen without been hit.",
    link: "https://github.com/viniciuscodc/SpaceRunner",
    tag_1: "Java",
    tag_2: "AWT",
    tag_3: "Swing",
  },

  {
    id: 1,
    description:
      "A Java implementation of the classic 1972 game using Java AWT, Swing.",
    link: "https://github.com/viniciuscodc/PongGame",
    tag_1: "Java",
    tag_2: "AWT",
    tag_3: "Swing",
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

const images = [
  image10,
  image9,
  image8,
  image7,
  image6,
  image5,
  image4,
  image3,
  image2,
  image1,
];

export default function Cards() {
  return (
    <div className="card-grid">
      {projects.map(function (card, index) {
        return (
          <div key={index} className="card">
            <div className="card-image">
              <img src={images[index]} alt="card-img" />
            </div>
            <div className="card-information">
              <p>{card.description}</p>
            </div>
            <div className="tag-container">
              <CardTag cardTagData={card} cardIndex={index} />
            </div>
            <div className="card-button">
              <a href={card.link}>
                <span>Check</span>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
