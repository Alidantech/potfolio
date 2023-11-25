import { styled } from "styled-components";


// styles to be inherited by all buttons
const Button = styled.button`
      background-color: initial;
      outline: initial;
      border: initial;
`;

export const TextButton = styled(Button)`
  border: 5% solid;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px #00000047;
  padding: 3%;
`;
