import React from "react";
import { HeaderWrapper, User, Navbar } from "./HeaderElements";
import profPic from "../../img/profilepic.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as headerActions from "../../Redux/header/header-actions";

const Header = () => {
  const show = useSelector((state) => state.header.show);
  const dispatch = useDispatch();
  return (
    <HeaderWrapper show={show}>
      <User>
        <img src={profPic} alt="Imagen de Perfil" />
        <h3>Rodrigo Troncoso</h3>
        <p>Front End Developer</p>
      </User>
      <Navbar>
        <a
          onClick={() => {
            if (window.innerWidth < 450) {
              dispatch(headerActions.toggleHeader());
            }
          }}
          href="#home"
        >
          HOME
        </a>
        <a
          onClick={() => {
            if (window.innerWidth < 450) {
              dispatch(headerActions.toggleHeader());
            }
          }}
          href="#sobremi"
        >
          SOBRE MI
        </a>
        <a
          onClick={() => {
            if (window.innerWidth < 450) {
              dispatch(headerActions.toggleHeader());
            }
          }}
          href="#herramientas"
        >
          HERRAMIENTAS
        </a>
        <a
          onClick={() => {
            if (window.innerWidth < 450) {
              dispatch(headerActions.toggleHeader());
            }
          }}
          href="#proyectos"
        >
          PROYECTOS
        </a>
        <a
          onClick={() => {
            if (window.innerWidth < 450) {
              dispatch(headerActions.toggleHeader());
            }
          }}
          href="#contacto"
        >
          CONTACTO
        </a>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
