import React from "react";
import {
  ProyetosWrapper,
  ProyectosContainer,
  ProyectoCard,
  TextContainer,
  Links,
} from "./Proyectoselements";
import landingBoke from "../../img/landingBoke.PNG";
import landingOdonto from "../../img/landingOdontologia.PNG";
import figurasValeon from "../../img/figurasValeon.PNG";
import gamesJS from "../../img/valeonGamesJS.PNG";
import gamesReact from "../../img/valeonGamesReact.PNG";
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

const Proyectos = () => {
  return (
    <ProyetosWrapper id="proyectos">
      <h1>Proyectos</h1>
      <ProyectosContainer>
        <ProyectoCard>
          <img src={landingBoke} />
          <TextContainer>
            <p>
              - Landing page responsive.
              <br />- HTML + CSS
            </p>
            <Links>
              <a href="https://github.com/RETroncoso/ResponsiveLandingPage.NucbaChallenge2">
                <FaGithub />
                <p>REPO</p>
              </a>

              <a href="https://responsive-landing-page-nucba-challenge2.vercel.app/">
                <RiComputerLine />
                <p>DEMO</p>
              </a>
            </Links>
          </TextContainer>
        </ProyectoCard>
        <ProyectoCard>
          <img src={landingOdonto} />
          <TextContainer>
            <p>
              - Landing page desktop only.
              <br />- HTML + CSS
            </p>
            <Links>
              <a href="https://github.com/RETroncoso/LandingPage_DesktopOnly">
                <FaGithub />
                <p>REPO</p>
              </a>

              <a href="https://landing-desktop-only-nucba-challenge3.vercel.app/">
                <RiComputerLine />
                <p>DEMO</p>
              </a>
            </Links>
          </TextContainer>
        </ProyectoCard>
        <ProyectoCard>
          <img src={figurasValeon} />
          <TextContainer>
            <p>
              - E-commerce responsive.
              <br />- HTML + CSS
            </p>
            <Links>
              <a href="https://github.com/RETroncoso/LandingPage_NoJS_Responsive">
                <FaGithub />
                <p>REPO</p>
              </a>

              <a href="https://figuras-valeon.vercel.app/">
                <RiComputerLine />
                <p>DEMO</p>
              </a>
            </Links>
          </TextContainer>
        </ProyectoCard>
        <ProyectoCard>
          <img src={gamesJS} />
          <TextContainer>
            <p>
              - E-commerce responsive. SPA.
              <br />- HTML + CSS + JS.
            </p>
            <Links>
              <a href="https://github.com/RETroncoso/SPA_JS-Responsive-Page">
                <FaGithub />
                <p>REPO</p>
              </a>

              <a href="https://valeon-games.vercel.app/">
                <RiComputerLine />
                <p>DEMO</p>
              </a>
            </Links>
          </TextContainer>
        </ProyectoCard>
        <ProyectoCard>
          <img src={gamesReact} />
          <TextContainer>
            <p>
              - E-commerce responsive.
              <br />
              -REACT + STYLED COMPONENTS + REDUX.
            </p>
            <Links>
              <a href="https://github.com/RETroncoso/Valeon-Games-React">
                <FaGithub />
                <p>REPO</p>
              </a>

              <a href="https://valeon-games-react.vercel.app/">
                <RiComputerLine />
                <p>DEMO</p>
              </a>
            </Links>
          </TextContainer>
        </ProyectoCard>
      </ProyectosContainer>
    </ProyetosWrapper>
  );
};

export default Proyectos;
