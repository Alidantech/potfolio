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
  /* backdrop-filter: blur(1000px); */
  box-shadow: 1px 1px 2px
    ${(props) => (props.$isScrolled ? "#00000011" : "transparent")};
`;
