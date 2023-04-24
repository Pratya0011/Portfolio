import React from "react";
import projects from "../projects.json";
import Untitled from "./Untitled.png";

function Projects() {
  const react = projects.filter(data=>data.type==='React')
  const vanilla = projects.filter(data=>data.type==='Vanilla')
  return (
    <div className="project-div">
      <h2>Web Devlopment Projcts</h2>
      <h3>WHAT I'V MADE</h3>
      <h2>React JS & REDUX</h2>
      <div className="project-container">
        {react.map((projects,index) => (
          <div className="project2" key={index}>
          <a href={projects.href} target="_blank">
            <div>
              <img src={projects.img} height="140px" width="200px" />
              <div className="title">{projects.title}</div>
            </div>
            <div className="project-about">
              <div className="pname">{projects.about}</div>
            </div>
          </a>
        </div>
        
        ))}
        </div>
        <h2>Vanilla JS</h2>
        <div className="project-container">
        {vanilla.map((projects,index) => (
          <div className="project2" key={index}>
            
          <a href={projects.href} target="_blank">
            <div>
              <img src={projects.img} height="140px" width="200px" />
              <div className="title">{projects.title}</div>
            </div>
            <div className="project-about">
              <div className="pname">{projects.about}</div>
            </div>
          </a>
        </div>
        ))}
        <div className="project2">
          <a
            href="https://pratya0011.github.io/project-builder-smartwatch-timer/"
            target="_blank"
          >
            <div>
              <img src={Untitled} height="140px" width="200px" />

              <div className="title">Smartwatch UI</div>
            </div>
            <div className="project-about">
              <div className="pname">Smartwatch with features</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
