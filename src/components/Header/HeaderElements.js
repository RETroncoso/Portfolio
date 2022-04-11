import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  background-color: #203336;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-110%")};
  z-index: 999;
  width: 30rem;
  border-right: 0.1rem solid #699097;
  height: 100%;
  padding: 2rem;
  text-align: center;
  transition: 0.3s;
  @media (max-width: 450px) {
    width: 100%;
    border-right: 0;
    left: ${(props) => (props.show ? "-110%" : "0")};
  }
`;

export const User = styled.div`
  img {
    margin: 1rem 0;
    border: 1rem solid transparent;
    border-radius: 50%;
    height: 18rem;
    width: 18rem;
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70, -0.4rem -0.4rem 1rem #699097;
    @media (max-width: 1600px) {
      height: 14rem;
      width: 14rem;
    }
  }
  h3 {
    font-size: 2.25rem;
    color: #75b3bd;
  }
  p {
    font-size: 1.5rem;
    color: #ceefd9;
  }
`;

export const Navbar = styled.nav`
  padding-top: 1rem;
  a {
    display: block;
    margin: 2rem 0;
    padding: 0.7rem;
    color: #75b3bd;
    border-right: 5rem;
    border-radius: 5rem;
    font-size: 2rem;
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70, -0.4rem -0.4rem 1rem #699097;
  }
  a:hover {
    box-shadow: inset 0.4rem 0.4rem 1rem #4e6b70,
      inset -0.4rem -0.4rem 1rem #699097;
  }
`;
