import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  background-color: #14191c;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-110%")};
  z-index: 999;
  width: 30rem;
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
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
    @media (max-width: 1600px) {
      height: 14rem;
      width: 14rem;
    }
  }
  h3 {
    font-size: 2.25rem;
    color: #ffffff;
  }
  p {
    font-size: 1.5rem;
    color: #ffffff;
  }
`;

export const Navbar = styled.nav`
  padding-top: 1rem;
  a {
    display: block;
    margin: 2rem 0;
    padding: 0.7rem;
    color: #ffffff;
    border-right: 5rem;
    border-radius: 5rem;
    font-size: 2rem;
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  }
  a:hover {
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem inset;
  }
`;
