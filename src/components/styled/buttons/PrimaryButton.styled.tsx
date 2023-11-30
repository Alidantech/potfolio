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
  background-color: #0077ff;
  color: white;
  font-weight: bold;
  border: 2px solid #0077ff;
  border-radius: 10px 4px;
  &:hover {
    background-color: transparent;
    color: #0077ff;
  }
`;
