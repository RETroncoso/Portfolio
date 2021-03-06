import styled from "styled-components";

export const ProyetosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 6rem;
    color: #ffffff;
    text-transform: uppercase;
    padding-bottom: 2rem;
    @media (max-width: 1600px) {
      font-size: 5rem;
    }
  }
`;

export const ProyectosContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProyectoCard = styled.div`
  padding: 0.5rem;
  margin: 4rem;
  width: 45rem;
  height: 22.5rem;
  border-radius: 0.5rem;
  box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 1600px) {
    margin: 3rem;
    width: 35rem;
    height: 17.8rem;
  }
  @media (max-width: 450px) {
    margin: 1.5rem;
    width: 35rem;
    height: 17.5rem;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
  :hover {
    img {
      display: none;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  p {
    color: #ffffff;
    margin-top: 1rem;
    font-size: 1.7rem;
    @media (max-width: 1600px) {
      font-size: 1.5rem;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: #016fb9;
  font-size: 3.5rem;
  @media (max-width: 1600px) {
    font-size: 3rem;
  }
  :hover {
    a {
      color: #ffffff;
    }
    p {
      color: #ffffff;
    }
  }
  a {
    text-align: center;
    color: #016fb9;
  }
  p {
    color: #016fb9;
    font-size: 2.5rem;
    @media (max-width: 1600px) {
      font-size: 2rem;
    }
  }
`;
