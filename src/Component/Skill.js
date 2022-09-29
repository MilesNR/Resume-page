import "./Aboutme.css";
import * as React from "react";
import Button from "@mui/material/Button";

function Aboutme() {
  return (
    <div className="main-container">
      <div className="Aboutme-container">
        <div>
          <img src={require("./img/profile.jpg")} className="avatar" />
        </div>
        <div className="Aboutme-detail">
          <p className="Job-postions">
            Restaurant Managers | Developer-in-Training
          </p>
          <p className="Name-title">Nattakit Rattanakeha (Smile)</p>
          <p className="jd">
            Web Developers design and update websites and online applications
            using various programming languages and design tools. A regular
            example resume for this job mentions responsibilities such as
            creating webpage layouts, writing code, editing website content, and
            making adjustments based on client feedback.{" "}
          </p>
          <div className="btn-panel">
            <a href="https://www.linkedin.com/in/nattakit-rattanakeha-746b39248/">
              <input className="btn Linkedin" type="button" value="Linkedin" />
            </a>
            <a href="https://github.com/MilesNR">
              <input className="btn Linkedin" type="button" value="Git Hub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
