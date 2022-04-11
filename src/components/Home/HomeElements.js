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
    color: #75b3bd;
    line-height: 1.1;
    text-transform: uppercase;
  }
  p {
    font-size: 2rem;
    color: #ceefd9;
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
    color: #75b3bd;
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70, -0.4rem -0.4rem 1rem #699097;
  }
  a:hover {
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70 inset,
      -0.4rem -0.4rem 1rem #699097 inset;
    color: #ceefd9;
  }
`;

export const HomeRedes = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 8rem;
  border-radius: 0.5rem;
  box-shadow: 0.4rem 0.4rem 1rem #4e6b70, -0.4rem -0.4rem 1rem #699097;
  padding: 1rem;
  a {
    margin: 0.5rem;
    padding-top: 0.8rem;
    font-size: 2rem;
    color: #75b3bd;
    border-radius: 0.5rem;
    margin: auto 1rem;
  }
  a:hover {
    color: #ceefd9;
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70 inline,
      -0.4rem -0.4rem 1rem #699097 inline;
  }
`;
