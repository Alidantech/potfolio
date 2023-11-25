import styled from "styled-components";

// styles to be inherited by all buttons
const Button = styled.button`
      background-color: initial;
      outline: initial;
      border: initial;
`;

export const IconButton = styled(Button)`
  font-weight: bold;
`;
