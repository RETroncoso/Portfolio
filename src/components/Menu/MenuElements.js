import styled from "styled-components";

export const MenuBtn = styled.div`
  display: none;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  line-height: 5.75rem;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem;
  text-align: center;
  color: #ffffff;
  :hover {
    color: #ffffff;
    box-shadow: rgb(6 6 6) 0.4rem 0.4rem 1rem inset;
  }
  @media (max-width: 450px) {
    display: initial;
  }
`;
