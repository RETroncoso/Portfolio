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
  box-shadow: 0.4rem 0.4rem 1rem #4e6b70, -0.4rem -0.4rem 1rem #699097;
  text-align: center;
  color: #75b3bd;
  :hover {
    color: #ceefd9;
    box-shadow: 0.4rem 0.4rem 1rem #4e6b70 inset,
      -0.4rem -0.4rem 1rem #699097 inset;
  }
  @media (max-width: 450px) {
    display: initial;
  }
`;
