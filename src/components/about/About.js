import React from "react";
import "./About.css";
import fotoPerfil from '../../media/foto-perfil.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          I really like programming and even though I am still studying for full stak developer I already have a few projects that I have done by myself using react.
          At the moment the languages I know are JavaScript, css, html and react.
        </p>
      </div>
      <div className="about-img">
        <img
          src={fotoPerfil}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
