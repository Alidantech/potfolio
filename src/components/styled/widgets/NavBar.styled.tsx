import { styled } from "styled-components";

export const NavBar = styled.nav<{ $showLinks?: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;

  @media (max-width: 768px) {
    visibility: ${(props) => (props.$showLinks ? "visible" : "hidden")};
    position: absolute;
    color: white;
    width: 100vw;
    top: 100%;
    left: 0;
    height: 100%;
    background-color: #000000;
  }
`;
