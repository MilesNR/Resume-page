import "./Aboutme.css";
import * as React from "react";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";

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
            <p>
              <AlternateEmailRoundedIcon />
              &nbsp;Nattakit.rattanakeha@gmail.com
            </p>
            <p>
              <PhoneIphoneRoundedIcon />
              &nbsp;+66 63-5262569
            </p>
            <p>
              <ApartmentRoundedIcon />
              &nbsp;Chiang Mai / Bangkok ,TH
            </p>
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
