import { styled } from "styled-components";

// styles to be inherited by all buttons
const Button = styled.button`
  background-color: initial;
  outline: initial;
  border: initial;
  cursor: pointer;
  transition: scale 30ms;
  &:active {
    scale: 0.95;
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 0.75vh 3vh;
  background-color: transparent;
  color: rgb(7, 133, 172);
  font-weight: bold;
  border: 1px solid rgb(7, 133, 172);
  border-radius: 25px;
  &:hover {
    background-color: rgb(7, 133, 172);
    color: #ffffff;
    scale: 1.1;
  }
`;
