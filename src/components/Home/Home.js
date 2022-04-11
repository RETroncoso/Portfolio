import React from "react";
import { HomeWrapper, HomeContent, HomeRedes } from "./HomeElements";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import cv from "../../Downloadables/CV_Troncoso_Rodrigo.pdf";

const Home = () => {
  return (
    <HomeWrapper id="home">
      <HomeContent>
        <h3>Rodrigo Troncoso</h3>
        <p>Front End Developer</p>
        <a href={cv} download>
          {" "}
          Descargar CV{" "}
        </a>
      </HomeContent>
      <HomeRedes>
        <a href="https://www.linkedin.com/in/rodrigo-troncoso/">
          <FaLinkedin
            style={{
              height: "5rem",
              width: "5rem",
            }}
          />
        </a>
        <a href="https://github.com/RETroncoso">
          <FaGithub
            style={{
              height: "5rem",
              width: "5rem",
            }}
          />
        </a>
      </HomeRedes>
    </HomeWrapper>
  );
};

export default Home;
