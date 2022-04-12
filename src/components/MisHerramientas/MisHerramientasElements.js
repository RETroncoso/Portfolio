import styled from "styled-components";

export const MisHerramientasContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 5rem;
    color: #ffffff;
    text-transform: uppercase;
    padding-bottom: 2rem;
  }

  span {
    color: #016fb9;
    font-size: 5rem;
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin: 4rem;
  width: 25rem;
  height: 29rem;
  border-radius: 0.5rem;
  box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  position: relative;
  z-index: 0;
  overflow: hidden;
  @media (max-width: 1600px) {
    margin: 3rem;
    width: 18rem;
    height: 20rem;
  }
  @media (max-width: 450px) {
    margin: 1.5rem;
    width: 15rem;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 13rem;
    @media (max-width: 1600px) {
      font-size: 10rem;
    }
  }
  p {
    color: #ffffff;
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 3rem;
    @media (max-width: 1600px) {
      font-size: 2rem;
    }
  }
  :hover {
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem inset;
    span,
    p {
      transition: 0.3s;
      color: #016fb9;
    }
  }
`;
