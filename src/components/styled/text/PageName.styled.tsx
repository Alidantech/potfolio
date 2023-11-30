import { styled } from "styled-components";

export const PageName = styled.p<{ color: string }>`
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: small;
`;
