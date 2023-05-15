import React from "react";
import "../App.css";
import pratya from "./pratya.JPG";
import cv from "./CV.pdf";

function Home() {
  return (
    <div className="home-component">
      <div className="div-one">
        <div className="div-three">
          <h1>Hello !</h1>
          <div>I'm a Developer</div>
          <p>
          Passionate Full Stack Developer | Electrical Engineering Graduate |
          <br/>
           Dedicated to Building Innovative Web Applications
          </p>
        </div>
      </div>
      <div className="div-two">
        <img src={pratya} alt="Photo" />
        <div>Developer</div>
        <div>
          <span>Kolkata,</span>
          <span>West Bengal</span>
        </div>
        <div className="contact">
          <div>
            <span>
              <i className="fa fa-google" aria-hidden="true"></i>
            </span>
            <span>pratya0011@gmail.com</span>
          </div>
          <div>
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>(+91)8240428488</span>
          </div>
        </div>
        <div className="social-icons">
          <span>
            <a href="https://www.facebook.com/pratya.tagore" target="_blank">
              <i className="fa fa-facebook-f"></i>
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/pratya-kumar-tagore-35a149197/"
              target="_blank"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/Pratya0011" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </span>
        </div>
        <div className="button">
          <a href={cv} download>
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
