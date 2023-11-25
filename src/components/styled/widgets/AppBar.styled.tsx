import { styled } from "styled-components";

export const AppBar = styled.header<{ $isScrolled?: Boolean; }>`
  position: ${(props) => (props.$isScrolled ? "fixed" : "initial")};
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  backdrop-filter: blur(1000px);
`;
