import { styled } from "styled-components";

// styles to be inherited by all buttons
const Button = styled.button`
  background-color: initial;
  outline: initial;
  border: initial;
  cursor: pointer;
  transition: scale 30ms;
  &:active{
      scale:0.95;
  }
`;

export const PrimaryButton = styled(Button)`
  padding: 1vh 2.5vh;
  background-color: rgb(7, 133, 172);
  color: white;
  font-weight: bold;
  border: 2px solid rgb(7, 133, 172);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 10px 4px;
  &:hover {
    background-color: transparent;
    color: rgb(7, 133, 172);
  }
`;
