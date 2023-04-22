import React from "react";
import projects from "../projects.json";
import Untitled from "./Untitled.png";

function Projects() {
  return (
    <div className="project-div">
      <h2>Web Devlopment Projcts</h2>
      <h3>WHAT I'V MADE</h3>
      <div className="project-container">
        {projects.map((projects) => (
          <div className="project2">
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
