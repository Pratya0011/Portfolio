import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Others from "./Others";
import "../App.css";

function Navbar() {
  return (
    <div>
      <Router>
        <div className="nav-bar">
          <div className="menu">
            <ul>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                <li>About</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/Education"
              >
                <li>Education & Traning</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/Skills"
              >
                <li>Skills & Languages</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/Projects"
              >
                <li>Projects</li>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/Other"
              >
                <li>Other</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Education" element={<Education />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Other" element={<Others />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Navbar;
