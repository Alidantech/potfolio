import { styled } from "styled-components";

export const Floating = styled.div`
  position: inherit;
  backdrop-filter: blur(105px);
  background-color: #000000b5;
  box-shadow: 1px 1px 3px 3px #0090b426;
  top: -10vh;
  z-index: 0;
  height: 20vh;
  clear: both;
  width: 90%;
  margin: 0 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
