import styled from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const HomeContent = styled.div`
  h3 {
    font-size: 7rem;
    color: #ffffff;
    line-height: 1.1;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    color: #ffffff;
    padding-bottom: 0.5rem;
  }
  a {
    margin-top: 2rem;
    display: inline-block;
    padding: 1rem 3.5rem;
    border-radius: 0.5rem;
    font-size: 1.7rem;
    cursor: pointer;
    background: none;
    color: #ffffff;
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  }
  a:hover {
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem inset;
  }
`;

export const HomeRedes = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 8rem;
  border-radius: 0.5rem;
  box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  padding: 1rem;
  a {
    margin: 0.5rem;
    padding-top: 0.8rem;
    font-size: 2rem;
    color: #016fb9;
    border-radius: 0.5rem;
    margin: auto 1rem;
  }
  a:hover {
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem inline;
  }
`;
