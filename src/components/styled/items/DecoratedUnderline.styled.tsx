import { styled } from "styled-components";

export const DecoratedUnderline = styled.hr`
  height: 5px;
  background-color: rgb(7, 153, 172);
  border: none;
  width: 5vw;
  margin: 10px 0;
  border-radius: 10px;
  transition: width 1s;
  &:hover {
    width: 7vw;
  }
`;
