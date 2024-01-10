import { styled } from "styled-components";

export const AppBar = styled.header<{ $isScrolled?: Boolean }>`
  position: ${(props) => (props.$isScrolled ? "fixed" : "static")};
  background-color: ${(props) =>
    props.$isScrolled ? "#ffffffff" : "#00000000"};
  width: 100%;
  z-index: 100;
  height: ${(props) => (props.$isScrolled ? "6.5vh" : "20vh")};
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  transition: height 0.1s ease-in, background-color 1s ease-in;
  /* backdrop-filter: blur(1000px); */
  box-shadow: rgba(0, 0, 0, 0.45);
  box-shadow: 0px 25px 20px -20px ${(props) => (props.$isScrolled ? "rgba(0, 0, 0, 0.075)" : "transparent")};
  @media screen and (max-width: 900px) {
    padding: 0 10px;
    height: ${(props) => (props.$isScrolled ? "6.5vh" : "10vh")};
  }
`;
