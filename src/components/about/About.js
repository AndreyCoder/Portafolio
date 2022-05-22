import React from "react";
import "./About.css";
// import fotoPerfil from '../../media/foto-perfil.png'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Déjame decirte algo sobre mí</h3>
        <p>
          Me gusta mucho la programación y aunque todavía estoy estudiando para ser desarrollador
          full stack ya tengo algunos proyectos que he hecho usando React.Por el momento los
          lenguajes que conozco son HTML, CSS, JavaScript y ReactJS.
        </p>
      </div>
      {/* <div className="about-img">
        <img
          src={fotoPerfil}
          alt="acerca de"
        />
      </div> */}
    </div>
  );
};

export default About;
