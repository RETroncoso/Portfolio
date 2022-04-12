import React from "react";
import { SobreMiWrapper } from "./SobreMiElements";

const SobreMi = () => {
  return (
    <SobreMiWrapper id="sobremi">
      <h1>Sobre mi</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>
          Mi nombre es <span>Rodrigo Troncoso</span>
        </h3>
        <p>
          Soy un desarrollador Front End con más de 1 año de experiencia
          profesional, radicado en Buenos Aires, Argentina.
          <br />
          Soy amante de las nuevas tecnologías y la resolución de problemas que
          durante años nos permitieron estar donde estamos hoy.
          <br />
          Actualmente estoy trabajando en mi ruta académica y profesional con
          React.js haciendo hincapié en Styled Components, entre otras
          herramientas.
          <br />
          En lo profesional me encuentro participando en un rol de mentoría y
          creación de contenidos en NUCBA, una edtech con impacto en la economía
          de toda la región de Latam.
        </p>
        <a href="#contacto">Contactame</a>
      </div>
    </SobreMiWrapper>
  );
};

export default SobreMi;
