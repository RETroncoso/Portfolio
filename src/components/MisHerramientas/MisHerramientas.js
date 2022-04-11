import React from "react";
import {
  Card,
  CardsContainer,
  MisHerramientasContainer,
} from "./MisHerramientasElements";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiRedux, SiStyledcomponents } from "react-icons/si";

const MisHerramientas = () => {
  return (
    <MisHerramientasContainer id="herramientas">
      <h1>
        Mis<span> herramientas</span>
      </h1>
      <CardsContainer>
        <Card>
          <span>
            <FaHtml5 />
            <p>HTML5</p>
          </span>
        </Card>
        <Card>
          <span>
            <FaCss3Alt />
            <p>CSS3</p>
          </span>
        </Card>
        <Card>
          <span>
            <FaJsSquare />
            <p>JAVASCRIPT</p>
          </span>
        </Card>
        <Card>
          <span>
            <FaReact />
            <p>REACT.JS</p>
          </span>
        </Card>
        <Card>
          <span>
            <SiRedux />
            <p>REDUX</p>
          </span>
        </Card>
        <Card>
          <span>
            <SiStyledcomponents />
            <p>STYLED COMPONENTS</p>
          </span>
        </Card>
      </CardsContainer>
    </MisHerramientasContainer>
  );
};

export default MisHerramientas;
