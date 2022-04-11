import styled from "styled-components";

export const SobreMiWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 6rem;
    color: #75b3bd;
    text-transform: uppercase;
    padding-bottom: 2rem;
    span {
      font-size: 6rem;
    }
    @media (max-width: 1600px) {
      font-size: 5rem;
      span {
        font-size: 5rem;
      }
    }
  }

  span {
    font-size: 4.5rem;
    color: #ceefd9;
    text-transform: uppercase;
  }
  h3 {
    font-size: 4.5rem;
    color: #75b3bd;
    line-height: 1.8;
    @media (max-width: 1600px) {
      font-size: 3.5rem;
      span {
        font-size: 3.5rem;
      }
    }
  }
  h3 span {
    color: #ceefd9;
  }

  a {
    font-weight: 700;
    margin-top: 2rem;
    display: inline-block;
    padding: 1rem 3.5rem;
    border-radius: 0.5rem;
    font-size: 2rem;
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
  p {
    font-size: 2.5rem;
    color: #ceefd9;
    line-height: 1.8;
    padding: 1rem 0;
    @media (max-width: 1600px) {
      font-size: 1.7rem;
    }
  }
`;
