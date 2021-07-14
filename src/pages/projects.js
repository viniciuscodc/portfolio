import * as React from 'react';
import "./../style/reset.css";
import "./../style/projects.scss";
import Navigation from "./../templates/navigation";
import Social from "./../templates/social";
import { Helmet } from "react-helmet";
import image from "./../images/image-1.png";

const projects = [
  {
    description: "Website feito para a concessionária Polaris em Curitiba. O website é responsivo e foi desenhado no Adobe XD , feito usando HTML, CSS, Javascript e PHP para a página de contato.",
    tag_1: "CSS",
    tag_2: "HTML",
    tag_3: "Javascript",
  },
  {
    description: "Descrição 2",
    tag_1: "CSS",
  },
];

/*
for (let i = 0; i < projects.length; i++) {
  if(typeof projects[0].tag_2 !== "undefined"){
    //let tagContainer = document.querySelectorAll(".tag-container");
    let tagContainer = document.getElementById("x")
    let spanTag = document.createElement("span");
    //tagContainer.appendChild(spanTag);
  }
}
*/

//let mainContainer = React.createElement("p", { id: "x" }, "texto texto");

function CardTag(cardTagData){

  console.log(cardTagData.cardTagData)
  
  for (let i = 0; i < projects.length; i++) {

    if(typeof projects[i].tag_1 !== "undefined"){
      return(<span>{cardTagData.cardTagData.tag_1}</span>)
    }
    
    else{
      return(null);
    }
  }
}

const ProjectPage = () => {

  return (
    <main>
  
      <Navigation />
      <Helmet title="Projects" bodyAttributes={{ class: "projects-page" }} />
      <Social />

      <h2 className="projects-header">Projects</h2>
      
      <div className="card-grid">
      {projects.map(card => (
        <div className="card">
          <div className="card-image">
            <img src={image} alt="project-img" />
          </div>
          <div className="card-information">
            <p>
              {card.description}
            </p>
          </div>
          <div className="tag-container">
          
            <CardTag cardTagData={card}  />
            {
          /*
            <span>{card.tag_1}</span>
            <span>{card.tag_2}</span>
            <span>Javascript</span>
          */}
          </div>
          <div className="card-button">
            <span>Check</span>
          </div>
        </div>
      ))}
      </div>
    </main>
  );
  
};

export default ProjectPage;
