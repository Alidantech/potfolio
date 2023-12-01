import { styled } from "styled-components";

export const AppBar = styled.header<{ $isScrolled?: Boolean }>`
  position: ${(props) => (props.$isScrolled ? "fixed" : "relative")};
  background-color: white;
  width: 100%;
  z-index: 100;
  height: ${(props) => (props.$isScrolled ? "6.5vh" : "10vh")};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  transition: height .1s;
  /* backdrop-filter: blur(1000px); */
  box-shadow: rgba(0, 0, 0, 0.45);
  box-shadow: 0px 25px 20px -20px ${(props) => (props.$isScrolled ? "rgba(0, 0, 0, 0.075)" : "transparent")};
`;
