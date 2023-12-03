import { styled } from "styled-components";

export const NavBar = styled.nav<{ $showLinks?: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  transition: visibility .5s, height .5s;
  @media (max-width: 768px) {
    visibility: ${(props) => (props.$showLinks ? "visible" : "hidden")};
    /* transform: ${(props) =>
      props.$showLinks ? "translateY(0)" : "translateY(-100%)"}; */
    order: 0;
    position: absolute;
    color: white;
    width: 100vw;
    top: 100%;
    left: 0;
    overflow: hidden;
    height: ${(props) =>
      props.$showLinks ? "100%" : "0"};
    background-color: rgb(7, 133, 172);
    & a {
      color: white;
    }
  }
`;
