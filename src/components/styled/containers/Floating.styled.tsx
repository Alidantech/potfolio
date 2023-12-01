import { styled } from "styled-components";

export const Floating = styled.div`
  position: inherit;
  backdrop-filter: blur(105px);
  background-color: rgb(4, 58, 75);
  box-shadow: #01ccff4e 0px 18px 50px -10px;
  top: -10vh;
  z-index: 0;
  height: 20vh;
  min-height: 120px;
  clear: both;
  width: 90%;
  margin: 0 5%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
